import { shallow } from 'enzyme'
import React from 'react'
import * as d3Force from 'd3-force'
import * as d3Selection from 'd3-selection'
import { BouncingBubbleChart } from '../index'

let nodes = [{ x: 0, y: 0 }]
function mockNodes() {
  // @ts-ignore
  mockNodes.hasBeenCalled = true
  return nodes
}
jest.mock('../nodes', () => ({
  generateNodes: jest.fn(mockNodes),
}))

const BUBBLES: Bubble[] = [
  {
    id: 1,
    title: 'a',
    total: 250,
    count: { low: 100, medium: 50, high: 100 },
  },
  {
    id: 5,
    title: 'b',
    total: 225,
    count: { low: 50, medium: 100, high: 75 },
  },
  {
    id: 2,
    title: 'c',
    total: 200,
    count: { low: 100, medium: 75, high: 25 },
  },
  { id: 3, title: 'd', total: 101, count: { low: 75, medium: 25, high: 1 } },
  { id: 4, title: 'e', total: 126, count: { low: 25, medium: 1, high: 100 } },
  { id: 6, title: 'f', total: 151, count: { low: 1, medium: 100, high: 50 } },
]

describe('BubbleChart::BouncingBubbleChart', () => {
  const defaults = {
    type: 'low' as BubbleType,
    scale: 2,
    bubbles: BUBBLES,
    width: 1000,
    height: 500,
  }
  let mockSelect = {}
  let mockForce = {}
  const BubbleDrawer = {
    highlightType() {},
    focus() {},
    handleMouseLeave() {},
    remove() {},
    setTabbableBubbles() {},
  }

  beforeEach(() => {
    mockSelect = {
      append: jest.fn(() => mockSelect),
      attr: jest.fn(() => mockSelect),
      data: jest.fn(() => mockSelect),
      enter: jest.fn(() => mockSelect),
      exit: jest.fn(() => mockSelect),
      on: jest.fn(() => mockSelect),
      selectAll: jest.fn(() => mockSelect),
      remove: jest.fn(() => mockSelect),
      each: jest.fn(() => mockSelect),
    }
    mockForce = {
      alpha: jest.fn(() => mockForce),
      alphaDecay: jest.fn(() => mockForce),
      alphaMin: jest.fn(() => mockForce),
      alphaTarget: jest.fn(() => mockForce),
      find: jest.fn(() => mockForce),
      force: jest.fn(() => mockForce),
      nodes: jest.fn(() => mockForce),
      on: jest.fn(() => mockForce),
      restart: jest.fn(() => mockForce),
      stop: jest.fn(() => mockForce),
      tick: jest.fn(() => mockForce),
      velocityDecay: jest.fn(() => mockForce),
    }
    nodes = [{ x: 0, y: 0 }]
  })

  it('renders main div container', () => {
    const tree = shallow<BouncingBubbleChart>(
      <BouncingBubbleChart {...defaults} />
    )
    const div = tree.find('div')
    expect(div.exists()).toBe(true)
    expect(div.props()).toMatchObject({
      onClick: tree.instance().handleMouseLeave,
      onMouseLeave: tree.instance().handleMouseLeave,
    })
  })

  it('renders main svg container', () => {
    const tree = shallow<BouncingBubbleChart>(
      <BouncingBubbleChart {...defaults} />
    )
    const svg = tree.find('svg')
    expect(svg.exists()).toBe(true)
    expect(svg.props()).toMatchObject({
      className: 'chart',
      focusable: 'false',
      height: defaults.height,
      viewBox: `0 0 ${defaults.width} ${defaults.height}`,
      width: '100%',
    })
  })

  it('creates a d3 wrapper for the svg container', () => {
    const spy = jest.spyOn(d3Selection, 'select')
    const tree = shallow<BouncingBubbleChart>(
      <BouncingBubbleChart {...defaults} />
    )
    // @ts-ignore
    const svg: SVGElement = document.createElement('svg')
    tree.instance().setSVGRef(svg)
    expect(spy).toHaveBeenCalledWith(svg)
    spy.mockRestore()
  })

  it('appends a "g" tag to the svg container', () => {
    const spy = jest
      .spyOn(d3Selection, 'select')
      // @ts-ignore
      .mockImplementation(() => mockSelect)
    const tree = shallow<BouncingBubbleChart>(
      <BouncingBubbleChart {...defaults} />
    )
    // @ts-ignore
    const svg: SVGElement = document.createElement('svg')
    tree.instance().setSVGRef(svg)
    tree.instance().componentDidMount()
    // @ts-ignore
    expect(mockSelect.append).toHaveBeenCalledWith('g')
    spy.mockRestore()
  })

  describe('data nodes', () => {
    it('does not throw when nodes is empty', () => {
      nodes = []
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} />
      )
      expect(() => tree.instance().renderSimulation()).not.toThrow()
    })
  })

  describe('forceSimulation chart', () => {
    it('creates a forceSimulation chart', () => {
      const spySim = jest
        .spyOn(d3Force, 'forceSimulation')
        // @ts-ignore
        .mockImplementation(() => mockForce)

      shallow<BouncingBubbleChart>(<BouncingBubbleChart {...defaults} />)
      expect(spySim).toHaveBeenCalledWith(expect.any(Array))
      // @ts-ignore
      expect(mockNodes.hasBeenCalled).toBe(true)
      spySim.mockRestore()
    })

    it('does not throw when nodes is empty', () => {
      const spySim = jest
        .spyOn(d3Force, 'forceSimulation')
        // @ts-ignore
        .mockImplementation(() => mockForce)

      shallow<BouncingBubbleChart>(<BouncingBubbleChart {...defaults} />)
      expect(spySim).toHaveBeenCalledWith(expect.any(Array))
      // @ts-ignore
      expect(mockNodes.hasBeenCalled).toBe(true)
      spySim.mockRestore()
    })

    it('groups bubbles by mastery when "mastery" prop is defined when mounting', () => {
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} type="high" />
      )
      const spyMasteryGroup = jest.spyOn(tree.instance(), 'joinBubblesByType')
      const spyJoinBubbles = jest.spyOn(tree.instance(), 'joinBubbles')
      tree.instance().renderSimulation()
      expect(spyMasteryGroup).toHaveBeenCalled()
      expect(spyJoinBubbles).not.toHaveBeenCalled()
      spyMasteryGroup.mockRestore()
      spyJoinBubbles.mockRestore()
    })

    it('join all bubbles when "mastery" prop is not defined when mounting', () => {
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} type={null} />
      )
      const spyMasteryGroup = jest.spyOn(tree.instance(), 'joinBubblesByType')
      const spyJoinBubbles = jest.spyOn(tree.instance(), 'joinBubbles')
      tree.instance().renderSimulation()
      expect(spyMasteryGroup).not.toHaveBeenCalled()
      expect(spyJoinBubbles).toHaveBeenCalled()
      spyMasteryGroup.mockRestore()
      spyJoinBubbles.mockRestore()
    })
  })

  describe('event handling', () => {
    it('handles click event over main container', () => {
      const handleMouseLeave = jest.fn()
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} />
      )
      // @ts-ignore
      tree.instance().bubbleDrawer = { ...BubbleDrawer, handleMouseLeave }
      tree.find('div').simulate('click')
      expect(handleMouseLeave).toHaveBeenCalled()
    })

    it('handles mouse leave event over main container', () => {
      const handleMouseLeave = jest.fn()
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} />
      )
      // @ts-ignore
      tree.instance().bubbleDrawer = { ...BubbleDrawer, handleMouseLeave }
      tree.find('div').simulate('mouseleave')
      expect(handleMouseLeave).toHaveBeenCalled()
    })

    it('should call focus on  "handleTooltipBlur"', () => {
      const tooltipForBubbleId = defaults.bubbles[0].id
      const tooltipForType = 'low'
      const focus = jest.fn()
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart
          {...defaults}
          tooltipForBubbleId={tooltipForBubbleId}
          tooltipForType={tooltipForType}
        />
      )
      // @ts-ignore
      tree.instance().bubbleDrawer = { ...BubbleDrawer, focus }
      tree.instance().handleTooltipBlur()
      expect(focus).toHaveBeenCalledWith(
        tooltipForBubbleId.toString(),
        tooltipForType
      )
    })
  })

  describe('unmount', () => {
    it('calls removes  on unmount', () => {
      const remove = jest.fn()
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} />
      )
      // @ts-ignore
      tree.instance().bubbleDrawer = { ...BubbleDrawer, remove }
      // @ts-ignore
      const spyStop = jest.spyOn(tree.instance().simulation, 'stop')

      tree.unmount()
      expect(remove).toHaveBeenCalled()
      expect(spyStop).toHaveBeenCalled()
      spyStop.mockRestore()
    })
  })

  describe('focusable bubbles', () => {
    it('calls setTabbableBubbles when the "mastery" prop is defined', () => {
      const setTabbableBubbles = jest.fn()
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} type="low" />
      )
      // @ts-ignore
      tree.instance().bubbleDrawer = { ...BubbleDrawer, setTabbableBubbles }
      tree.setProps({ type: 'high' })
      expect(setTabbableBubbles).toHaveBeenCalledWith('high')
    })
  })

  describe('handle updates', () => {
    it('re-renders simulation when bubbles have changed', () => {
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} type={null} />
      )
      const spySimulation = jest.spyOn(tree.instance(), 'renderSimulation')
      const spyMasteryGroup = jest.spyOn(tree.instance(), 'joinBubblesByType')
      tree.setProps({ bubbles: [] })
      expect(spySimulation).toHaveBeenCalled()
      expect(spyMasteryGroup).not.toHaveBeenCalled()
      spySimulation.mockRestore()
      spyMasteryGroup.mockRestore()
    })

    it('groups the bubbles by mastery when `mastery` prop is set', () => {
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} />
      )
      const spySimulation = jest.spyOn(tree.instance(), 'renderSimulation')
      const spyMasteryGroup = jest.spyOn(tree.instance(), 'joinBubblesByType')
      tree.setProps({ type: 'high' })
      expect(spySimulation).not.toHaveBeenCalled()
      expect(spyMasteryGroup).toHaveBeenCalled()
      spySimulation.mockRestore()
      spyMasteryGroup.mockRestore()
    })

    it('joins the bubbles when `type` prop is not set', () => {
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} type="low" />
      )
      const spySimulation = jest.spyOn(tree.instance(), 'renderSimulation')
      const spyMasteryGroup = jest.spyOn(tree.instance(), 'joinBubblesByType')
      const spyJoinBubbles = jest.spyOn(tree.instance(), 'joinBubbles')
      tree.setProps({ type: null })
      expect(spyJoinBubbles).toHaveBeenCalled()
      expect(spySimulation).not.toHaveBeenCalled()
      expect(spyMasteryGroup).not.toHaveBeenCalled()
      spySimulation.mockRestore()
      spyMasteryGroup.mockRestore()
      spyJoinBubbles.mockRestore()
    })

    it('does not change chart when bubbles and type have not changed', () => {
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} type={null} />
      )
      const spySimulation = jest.spyOn(tree.instance(), 'renderSimulation')
      const spyMasteryGroup = jest.spyOn(tree.instance(), 'joinBubblesByType')
      const spyJoinBubbles = jest.spyOn(tree.instance(), 'joinBubbles')
      tree.setProps({ bubbles: defaults.bubbles, type: 'high' })
      expect(spyJoinBubbles).not.toHaveBeenCalled()
      expect(spyMasteryGroup).toHaveBeenCalled()
      expect(spySimulation).not.toHaveBeenCalled()

      spySimulation.mockReset()
      spyMasteryGroup.mockReset()
      spyJoinBubbles.mockReset()

      tree.setProps({
        bubbles: defaults.bubbles,
        type: 'high',
        tooltipForBubbleId: 55,
      })
      expect(spyJoinBubbles).not.toHaveBeenCalled()
      expect(spyMasteryGroup).not.toHaveBeenCalled()
      expect(spySimulation).not.toHaveBeenCalled()

      spySimulation.mockRestore()
      spyMasteryGroup.mockRestore()
      spyJoinBubbles.mockRestore()
    })
  })

  describe('groups', () => {
    it('joins bubbles in a group', () => {
      const highlightType = jest.fn()
      const spy = jest
        .spyOn(d3Force, 'forceSimulation')
        // @ts-ignore
        .mockImplementation(() => mockForce)

      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} />
      )
      // @ts-ignore
      tree.instance().bubbleDrawer = { ...BubbleDrawer, highlightType }
      tree.instance().joinBubbles()
      expect(spy).toHaveBeenCalled()
      expect(mockForce.alpha).toHaveBeenCalledWith(0.85)
      expect(mockForce.alphaDecay).toHaveBeenCalledWith(0.00358)
      expect(mockForce.alphaTarget).toHaveBeenCalledWith(0)
      expect(mockForce.alphaMin).toHaveBeenCalledWith(0.15)
      expect(mockForce.velocityDecay).toHaveBeenCalledWith(0.11)
      expect(mockForce.force).toHaveBeenCalledWith('x', expect.any(Function))
      expect(mockForce.force).toHaveBeenCalledWith('y', expect.any(Function))
      expect(mockForce.force).toHaveBeenCalledWith('collide', null)
      expect(mockForce.force).toHaveBeenCalledWith(
        'charge',
        expect.any(Function)
      )
      expect(mockForce.force).toHaveBeenCalledWith(
        'center',
        expect.any(Function)
      )
      expect(mockForce.restart).toHaveBeenCalled()
      expect(highlightType).toHaveBeenCalled()
      spy.mockRestore()
    })

    it('separates bubbles by cluster', () => {
      const highlightType = jest.fn()
      const spy = jest
        .spyOn(d3Force, 'forceSimulation')
        .mockImplementation(() => mockForce)

      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} />
      )
      // @ts-ignore
      tree.instance().bubbleDrawer = { ...BubbleDrawer, highlightType }
      tree.instance().splitBubbles()
      expect(spy).toHaveBeenCalled()
      expect(mockForce.alpha).toHaveBeenCalledWith(1)
      expect(mockForce.alphaDecay).toHaveBeenCalledWith(0.0228)
      expect(mockForce.alphaTarget).toHaveBeenCalledWith(0)
      expect(mockForce.alphaMin).toHaveBeenCalledWith(0)
      expect(mockForce.velocityDecay).toHaveBeenCalledWith(0.1)
      expect(mockForce.force).toHaveBeenCalledWith('x', expect.any(Function))
      expect(mockForce.force).toHaveBeenCalledWith('y', expect.any(Function))
      expect(mockForce.force).toHaveBeenCalledWith(
        'collide',
        expect.any(Function)
      )
      expect(mockForce.force).toHaveBeenCalledWith('charge', null)
      expect(mockForce.force).toHaveBeenCalledWith('center', null)
      expect(mockForce.restart).toHaveBeenCalled()
      expect(highlightType).toHaveBeenCalled()
      spy.mockRestore()
    })

    it('groups for just a mastery cluster', () => {
      const highlightType = jest.fn()
      const spy = jest
        .spyOn(d3Force, 'forceSimulation')
        .mockImplementation(() => mockForce)

      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} />
      )
      // @ts-ignore
      tree.instance().bubbleDrawer = { ...BubbleDrawer, highlightType }
      tree.instance().joinBubblesByType()
      expect(spy).toHaveBeenCalled()
      expect(mockForce.alpha).toHaveBeenCalledWith(1)
      expect(mockForce.alphaDecay).toHaveBeenCalledWith(0.025)
      expect(mockForce.alphaTarget).toHaveBeenCalledWith(0)
      expect(mockForce.alphaMin).toHaveBeenCalledWith(0)
      expect(mockForce.velocityDecay).toHaveBeenCalledWith(0.13)
      expect(mockForce.force).toHaveBeenCalledWith('x', expect.any(Function))
      expect(mockForce.force).toHaveBeenCalledWith('y', expect.any(Function))
      expect(mockForce.force).toHaveBeenCalledWith('collide', null)
      expect(mockForce.force).toHaveBeenCalledWith('center', null)
      expect(mockForce.force).toHaveBeenCalledWith(
        'charge',
        expect.any(Function)
      )
      expect(mockForce.restart).toHaveBeenCalled()
      expect(highlightType).toHaveBeenCalledWith(defaults.type)
      spy.mockRestore()
    })

    it('does not throw when simulation is not defined', () => {
      const tree = shallow<BouncingBubbleChart>(
        <BouncingBubbleChart {...defaults} />
      )
      tree.instance().simulation = null
      expect(() => tree.instance().joinBubblesByType()).not.toThrow()
    })
  })
})
