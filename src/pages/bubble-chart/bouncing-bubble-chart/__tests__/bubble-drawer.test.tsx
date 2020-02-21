import BubbleDrawer from '../bubble-drawer'
import * as d3Selection from 'd3-selection'

describe('BubbleChart::BubbleDrawer', () => {
  let spy
  let bubbleDrawer
  let mockSVG = {}
  let simulation = {}
  const nodes = [
    {
      bubbleId: 'bubble1high',
      mastery: 'high',
      name: 'Demonstrate Cred',
      r: 100,
      skillId: 1,
      x: 200,
      y: 0,
    },
    {
      bubbleId: 'bubble1medium',
      mastery: 'medium',
      name: 'Analytic Ability',
      r: 50,
      skillId: 1,
      x: 200,
      y: 200,
    },
  ]

  beforeEach(() => {
    mockSVG = {
      append: jest.fn(() => mockSVG),
      attr: jest.fn(() => mockSVG),
      data: jest.fn(() => mockSVG),
      enter: jest.fn(() => mockSVG),
      exit: jest.fn(() => mockSVG),
      on: jest.fn(() => mockSVG),
      selectAll: jest.fn(() => mockSVG),
      remove: jest.fn(() => mockSVG),
      each: jest.fn(() => mockSVG),
    }

    simulation = {
      on: jest.fn(),
      nodes: jest.fn(() => nodes),
    }

    spy = jest.spyOn(d3Selection, 'select').mockImplementation(() => mockSVG)

    bubbleDrawer = new BubbleDrawer({ svg: mockSVG })
  })

  afterEach(() => {
    spy.mockRestore()
  })

  it('renders all of the skills as circles', () => {
    bubbleDrawer.draw(simulation)
    expect(mockSVG.selectAll).toHaveBeenCalledWith('circle')
    expect(mockSVG.data).toHaveBeenCalledWith(nodes)
    expect(mockSVG.enter).toHaveBeenCalled()
    expect(mockSVG.append).toHaveBeenCalledWith('circle')

    expect(mockSVG.attr).toHaveBeenCalledTimes(6)
    expect(mockSVG.attr).toHaveBeenCalledWith('r', expect.any(Function))
    expect(mockSVG.attr).toHaveBeenCalledWith('class', expect.any(Function))
    expect(mockSVG.attr).toHaveBeenCalledWith('role', 'button')
    expect(mockSVG.attr).toHaveBeenCalledWith('tabindex', 0)
    expect(mockSVG.attr).toHaveBeenCalledWith('id', expect.any(Function))
    expect(mockSVG.attr).toHaveBeenCalledWith(
      'aria-label',
      expect.any(Function)
    )

    expect(mockSVG.on).toHaveBeenCalledTimes(4)
    expect(mockSVG.on).toHaveBeenCalledWith(
      'mouseover',
      bubbleDrawer.handleMouseOver
    )
    expect(mockSVG.on).toHaveBeenCalledWith('focus', bubbleDrawer.handleFocus)
    expect(mockSVG.on).toHaveBeenCalledWith('click', bubbleDrawer.handleClick)
    expect(mockSVG.on).toHaveBeenCalledWith(
      'keydown',
      bubbleDrawer.handleKeyPress
    )

    expect(simulation.nodes).toHaveBeenCalled()
    expect(simulation.on).toHaveBeenCalledWith('tick', bubbleDrawer.handleTick)
  })

  it('does not throw when svg is undefined', () => {
    bubbleDrawer = new BubbleDrawer({})
    expect(() => {
      bubbleDrawer.draw(simulation)
    }).not.toThrow()
  })

  it('adds the right class name for each circle', () => {
    bubbleDrawer.draw(simulation)
    const bubbleClassFn = mockSVG.attr.mock.calls[1][1]
    expect(bubbleClassFn({ mastery: 'high' })).toBe('highBubble')
    expect(bubbleClassFn({ mastery: 'medium' })).toBe('mediumBubble')
    expect(bubbleClassFn({ mastery: 'low' })).toBe('lowBubble')
  })

  it('adds the right radius for each circle', () => {
    bubbleDrawer.draw(simulation)
    const radiusFn = mockSVG.attr.mock.calls[0][1]
    expect(radiusFn({ x: 1, y: 1, r: 20 })).toBe(20)
  })

  it('adds the right id for each circle', () => {
    bubbleDrawer.draw(simulation)
    const idFn = mockSVG.attr.mock.calls[4][1]
    expect(idFn({ x: 1, y: 1, bubbleId: 'bubble1' })).toBe('bubble1')
  })

  it('sets the right aria-label for each circle', () => {
    bubbleDrawer.draw(simulation)
    const ariaFn = mockSVG.attr.mock.calls[5][1]
    expect(ariaFn(nodes[0])).toBe(`Select ${nodes[0].name}`)
  })

  it('handle the "tick" event to renderize a circle position', () => {
    const attr = jest.fn(() => bubbleDrawer.bubbles)
    bubbleDrawer.bubbles = { attr }
    bubbleDrawer.handleTick()
    expect(attr).toHaveBeenCalledTimes(3)
    expect(attr).toHaveBeenCalledWith('cx', expect.any(Function))
    expect(attr).toHaveBeenCalledWith('cy', expect.any(Function))
    expect(attr).toHaveBeenCalledWith('r', expect.any(Function))

    expect(attr.mock.calls[0][1]({ x: 10, y: 20 })).toBe(10)
    expect(attr.mock.calls[1][1]({ x: 10, y: 20 })).toBe(20)
    expect(attr.mock.calls[2][1]({ r: 50 })).toBe(50)
  })

  describe('event handling', () => {
    const createSvgElement = (type = 'svg') =>
      document.createElementNS('http://www.w3.org/2000/svg', type)

    const rEvent = d3Selection.event
    afterEach(() => {
      d3Selection.event = rEvent
    })

    it('handles click on circles', () => {
      const bubble = {
        mastery: 'low',
        skillId: 1,
      }
      const onBubbleClick = jest.fn()
      bubbleDrawer = new BubbleDrawer({ svg: mockSVG, onBubbleClick })
      bubbleDrawer.handleClick(bubble)
      expect(onBubbleClick).toHaveBeenCalledWith(bubble.mastery, bubble.skillId)
    })

    it('handles mouse over circles', () => {
      const bubble = {
        type: 'low' as BubbleType,
        skillId: 1,
      }
      const onBubbleHover = jest.fn()
      bubbleDrawer = new BubbleDrawer({ svg: mockSVG, onBubbleHover })
      bubbleDrawer.handleMouseOver(bubble)
      expect(onBubbleHover).toHaveBeenCalledWith(bubble.skillId, bubble.type)
    })

    it('focus next bubble when calling "focus" method', () => {
      const nodeShow = createSvgElement('circle')
      nodeShow.getAttribute = jest.fn(() => '0')
      nodeShow.focus = jest.fn()
      const svg = {
        ...mockSVG,
        node: jest.fn(() => ({ nextElementSibling: nodeShow })),
        select: jest.fn(() => svg),
      }
      bubbleDrawer.props.svg = svg
      bubbleDrawer.focus(1, 'low')
      expect(svg.select).toHaveBeenCalledWith('#bubble1low')
      expect(svg.node).toHaveBeenCalled()
      expect(nodeShow.focus).toHaveBeenCalled()
    })

    it('looks for next focusable bubble when calling "focus" method', () => {
      const nextBubble = createSvgElement('circle')
      nextBubble.getAttribute = jest.fn(() => '0')
      nextBubble.focus = jest.fn()
      const nodeShow = createSvgElement('circle')
      nodeShow.getAttribute = jest.fn(() => null)
      nodeShow.focus = jest.fn()
      const svgWrapper = createSvgElement()
      svgWrapper.appendChild(nodeShow)
      svgWrapper.appendChild(nextBubble)
      const svg = {
        ...mockSVG,
        node: jest.fn(() => ({ nextElementSibling: nodeShow })),
        select: jest.fn(() => svg),
      }
      bubbleDrawer.props.svg = svg
      bubbleDrawer.focus(1, 'low')
      expect(nextBubble.focus).toHaveBeenCalled()
    })

    it('sets opacity when mouse is over circles', () => {
      const bubble = { mastery: 'low', skillId: 1 }
      const svg = {
        selectAll: jest.fn(() => svg),
        attr: jest.fn(() => svg),
      }
      bubbleDrawer.props.svg = svg
      bubbleDrawer.handleMouseOver(bubble)

      expect(svg.selectAll).toHaveBeenCalledWith('circle')
      expect(svg.attr).toHaveBeenCalledWith('opacity', expect.any(Function))
      const opacityFn = svg.attr.mock.calls[0][1]
      expect(opacityFn({ skillId: bubble.skillId })).toBe(1)
      expect(opacityFn({ skillId: 999 })).toBe(0.5)
    })

    it('handles focus on circles', () => {
      const bubble = { skillId: 5, type: 'high' }
      const onBubbleFocus = jest.fn()
      bubbleDrawer = new BubbleDrawer({ svg: mockSVG, onBubbleFocus })
      bubbleDrawer.handleFocus(bubble)
      expect(onBubbleFocus).toHaveBeenCalledWith(bubble.skillId, bubble.type)
    })

    it('handles mouse leave', () => {
      const onBubbleHover = jest.fn()
      bubbleDrawer = new BubbleDrawer({ svg: mockSVG, onBubbleHover })
      bubbleDrawer.handleMouseLeave()
      expect(onBubbleHover).toHaveBeenCalledWith(null)
    })

    it('restores opacity when mouse leaves', () => {
      bubbleDrawer.handleMouseLeave()
      expect(mockSVG.selectAll).toHaveBeenCalledWith('circle')
      expect(mockSVG.attr).toHaveBeenCalledWith('opacity', 1)
    })

    it('handles keypress on circles when key is "Enter"', () => {
      const bubble = { mastery: 'low', skillId: 1 }
      const preventDefault = jest.fn()
      const event = new KeyboardEvent('keydown', { key: 'Enter' })
      event.preventDefault = preventDefault
      d3Selection.event = event
      const onBubbleClick = jest.fn()
      bubbleDrawer = new BubbleDrawer({ svg: mockSVG, onBubbleClick })
      bubbleDrawer.handleKeyPress(bubble)
      expect(onBubbleClick).toHaveBeenCalledWith(bubble.mastery, bubble.skillId)
      expect(preventDefault).toHaveBeenCalled()
    })

    it('handles keypress on circles when key is "space"', () => {
      const bubble = { mastery: 'low', skillId: 1 }
      const preventDefault = jest.fn()
      const event = new KeyboardEvent('keydown', { key: ' ' })
      event.preventDefault = preventDefault
      d3Selection.event = event
      const onBubbleClick = jest.fn()
      bubbleDrawer = new BubbleDrawer({ svg: mockSVG, onBubbleClick })
      bubbleDrawer.handleKeyPress(bubble)
      expect(onBubbleClick).toHaveBeenCalledWith(bubble.mastery, bubble.skillId)
      expect(preventDefault).toHaveBeenCalled()
    })

    it('handles keypress on circles when key is "tab"', () => {
      const bubble = { mastery: 'low', skillId: 1 }
      d3Selection.event = new KeyboardEvent('keydown', { key: 'Tab' })
      const onTabPressed = jest.fn()
      bubbleDrawer = new BubbleDrawer({ svg: mockSVG, onTabPressed })
      bubbleDrawer.handleKeyPress(bubble)
      expect(onTabPressed).toHaveBeenCalledWith(d3Selection.event)
    })

    it('handles keypress on circles when key is "tab" and shift is press', () => {
      const bubble = { mastery: 'low', skillId: 1 }
      const preventDefault = jest.fn()
      const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true })
      event.preventDefault = preventDefault
      d3Selection.event = event
      const onTabPressed = jest.fn()
      bubbleDrawer = new BubbleDrawer({ svg: mockSVG, onTabPressed })
      bubbleDrawer.handleKeyPress(bubble)
      expect(onTabPressed).not.toHaveBeenCalled()
      expect(preventDefault).not.toHaveBeenCalled()
    })

    it('handles keypress on circles when key is not "Enter" or "space"', () => {
      const bubble = { mastery: 'low', skillId: 1 }
      d3Selection.event = new KeyboardEvent('keydown', { key: '1' })
      const onBubbleClick = jest.fn()
      bubbleDrawer = new BubbleDrawer({ svg: mockSVG, onBubbleClick })
      bubbleDrawer.handleKeyPress(bubble)
      expect(onBubbleClick).not.toHaveBeenCalled()
    })

    it('does not require the circle event handlers', () => {
      d3Selection.event = new KeyboardEvent('keydown', { key: 'Enter' })
      const bubble = { mastery: 'low', skillId: 1, bubbleId: '2' }
      expect(() => {
        bubbleDrawer.handleClick(bubble)
        bubbleDrawer.handleMouseOver(bubble)
        bubbleDrawer.handleFocus(bubble)
        bubbleDrawer.handleMouseLeave()
        bubbleDrawer.handleKeyPress(bubble)
      }).not.toThrow()
    })

    it('ignores keypress when event object is not a KeyboardEvent', () => {
      const bubble = { mastery: 'low', skillId: 1 }
      const preventDefault = jest.fn()
      const event = new Event('someOtherEvent')
      event.preventDefault = preventDefault
      d3Selection.event = event
      const onBubbleClick = jest.fn()
      const onTabPressed = jest.fn()
      bubbleDrawer = new BubbleDrawer({
        svg: mockSVG,
        onBubbleClick,
        onTabPressed,
      })
      bubbleDrawer.handleKeyPress(bubble)
      expect(onBubbleClick).not.toHaveBeenCalled()
      expect(onTabPressed).not.toHaveBeenCalled()
      expect(preventDefault).not.toHaveBeenCalled()
    })
  })

  it('set tabindex for those bubbles with a given mastery', () => {
    bubbleDrawer.setTabbableBubbles('low')
    expect(mockSVG.selectAll).toHaveBeenCalledWith('circle')
    expect(mockSVG.attr).toHaveBeenCalledWith('tabindex', expect.any(Function))
    const tabIndexFn = mockSVG.attr.mock.calls[0][1]
    expect(tabIndexFn({ mastery: 'low' })).toBe(0)
    expect(tabIndexFn({ mastery: 'high' })).toBe(-1)
  })

  it('removes the circles when calling "remove"', () => {
    bubbleDrawer.remove()
    expect(mockSVG.selectAll).toHaveBeenCalledWith('circle')
    expect(mockSVG.remove).toHaveBeenCalled()
  })

  it('does not throw when calling "remove" and the svg is not defined', () => {
    bubbleDrawer = new BubbleDrawer({})
    expect(() => {
      bubbleDrawer.remove()
    }).not.toThrow()
  })

  it('does not throw when svg is not defined', () => {
    bubbleDrawer.props.svg = null
    const fn = () => bubbleDrawer.highlightType('low')
    expect(fn).not.toThrow()
    expect(mockSVG.selectAll).not.toHaveBeenCalled()
    expect(mockSVG.each).not.toHaveBeenCalledWith()
  })

  describe('highlight mastery', () => {
    it('expands the radius of bubbles for a given mastery', () => {
      const bubble = {
        mastery: 'low',
        r: 20,
        x: 5,
        y: 2,
        initialRadius: 5,
      }
      const svg = {
        selectAll: jest.fn(() => svg),
        each: jest.fn(fn => {
          fn(bubble)
          return svg
        }),
      }
      bubbleDrawer.props.svg = svg

      bubbleDrawer.highlightType('low')
      expect(svg.selectAll).toHaveBeenCalledWith('circle')
      expect(svg.each).toHaveBeenCalledWith(expect.any(Function))
      expect(svg.each).toHaveBeenCalledTimes(2)
      const changeRadiusFn = svg.each.mock.calls[1][0]
      changeRadiusFn(bubble)
      expect(bubble).toEqual({ ...bubble, r: bubble.initialRadius * 0.5 })
    })

    it('resets the radius to default when mastery is not defined', () => {
      const bubble = {
        mastery: 'low',
        r: 20,
        x: 5,
        y: 2,
        initialRadius: 5,
      }
      const svg = {
        selectAll: jest.fn(() => svg),
        each: jest.fn(fn => {
          fn(bubble)
          return svg
        }),
      }
      bubbleDrawer.props.svg = svg

      bubbleDrawer.highlightType()
      expect(svg.selectAll).toHaveBeenCalledWith('circle')
      expect(svg.each).toHaveBeenCalledWith(expect.any(Function))
      expect(svg.each).toHaveBeenCalledTimes(2)
      const changeRadiusFn = svg.each.mock.calls[1][0]
      changeRadiusFn(bubble)
      expect(bubble).toEqual(bubble)
    })

    it('does not expand the radius more than five times', () => {
      const bubble = {
        mastery: 'low',
        r: 20,
        x: 5,
        y: 2,
        initialRadius: 1,
      }
      const svg = {
        selectAll: jest.fn(() => svg),
        each: jest.fn(fn => {
          fn({ ...bubble, initialRadius: 500, mastery: 'high' })
          fn({ ...bubble, initialRadius: 800, mastery: 'medium' })
          fn({ ...bubble, initialRadius: 1000, mastery: 'high' })
          return svg
        }),
      }
      bubbleDrawer.props.svg = svg

      bubbleDrawer.highlightType('low')
      expect(svg.selectAll).toHaveBeenCalledWith('circle')
      expect(svg.each).toHaveBeenCalledWith(expect.any(Function))
      expect(svg.each).toHaveBeenCalledTimes(2)
      const changeRadiusFn = svg.each.mock.calls[1][0]
      changeRadiusFn(bubble)
      expect(bubble).toEqual({ ...bubble, r: bubble.initialRadius * 5 })
    })
  })
})
