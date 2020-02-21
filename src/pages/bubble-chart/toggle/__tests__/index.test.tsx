import { shallow } from 'enzyme'
import React from 'react'
import { BouncingBubbleChart } from '../../bouncing-bubble-chart'
import { BubbleToggle } from '../index'

describe('BubbleChart::BubbleToggle', () => {
  // @ts-ignore
  const bubbleChart: BouncingBubbleChart = {
    splitBubbles: jest.fn(),
    joinBubbles: jest.fn(),
  }
  const defaults = {
    bubbleChart,
    onExpand: jest.fn(),
    onContract: jest.fn(),
  }
  const bubbleCollapse = '[data-qa="bubbleCollapseButton"]'
  const bubbleExpanded = '[data-qa="bubbleExpandedButton"]'
  const containerDiv = '[data-qa="bubbleToggleView"]'

  afterEach(() => {
    // @ts-ignore
    defaults.bubbleChart.splitBubbles.mockReset()
    // @ts-ignore
    defaults.bubbleChart.joinBubbles.mockReset()
  })

  it('renders div containing the 2 toggle buttons', () => {
    const tree = shallow<BubbleToggle>(<BubbleToggle {...defaults} />)
    expect(tree.find(containerDiv).exists()).toBe(true)
    expect(tree.find(bubbleCollapse).exists()).toBe(true)
    expect(tree.find(bubbleExpanded).exists()).toBe(true)
  })

  it('is able to select the collapsed button', () => {
    const tree = shallow<BubbleToggle>(<BubbleToggle {...defaults} />)
    tree.setState({ expandedView: false })
    expect(tree.find(bubbleCollapse).prop('aria-selected')).toBe(true)
    expect(tree.find(bubbleExpanded).prop('aria-selected')).toBe(false)
  })

  it('is able to select the expanded button', () => {
    const tree = shallow<BubbleToggle>(<BubbleToggle {...defaults} />)
    tree.setState({ expandedView: true })
    expect(tree.find(bubbleCollapse).prop('aria-selected')).toBe(false)
    expect(tree.find(bubbleExpanded).prop('aria-selected')).toBe(true)
  })

  it('should call onCollapseView call when the collapse button is click', () => {
    const tree = shallow<BubbleToggle>(<BubbleToggle {...defaults} />)
    tree.find(bubbleCollapse).simulate('click')
    expect(defaults.bubbleChart.joinBubbles).toHaveBeenCalled()
    expect(tree.instance().state.expandedView).toBe(false)
  })

  it('should call onExpandedView call when the expanded button is click', () => {
    const tree = shallow<BubbleToggle>(<BubbleToggle {...defaults} />)
    tree.find(bubbleExpanded).simulate('click')
    expect(defaults.bubbleChart.splitBubbles).toHaveBeenCalled()
    expect(tree.instance().state.expandedView).toBe(true)
  })

  it('calls on contract and on expand', () => {
    const tree = shallow<BubbleToggle>(<BubbleToggle {...defaults} />)
    tree.find(bubbleCollapse).simulate('click')
    expect(defaults.onContract).toHaveBeenCalled()

    tree.find(bubbleExpanded).simulate('click')
    expect(defaults.onExpand).toHaveBeenCalled()
  })
})
