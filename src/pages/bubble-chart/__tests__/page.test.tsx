import { shallow } from 'enzyme'
import React from 'react'
import { BouncingBubbleChart } from '../bouncing-bubble-chart'
import { BubbleChartTabs } from '../tabs'
import { BubbleToggle } from '../toggle'
import { BUBBLES } from './bubbles.data'
import { Page } from '../page'

describe('BubbleChart::Page', () => {
  const defaults = {
    fetch() {},
    selectType() {},
    selectBubble() {},
    bubbles: BUBBLES,
    selectedBubble: null,
    selectedType: null,
    type: 'low' as BubbleType,
  }

  it('instantiate the BubbleChartTabs component', () => {
    const tree = shallow<Page>(<Page {...defaults} />)
    const el = tree.find(BubbleChartTabs)

    expect(el.exists()).toBe(true)
    expect(el.props()).toMatchObject({
      onChange: tree.instance().handleTypeChange,
      activeTab: defaults.selectedType,
    })
  })

  it('selects the bigger bubble when type change (tabs)', () => {
    const type = 'high'
    const selectBubble = jest.fn()
    const selectType = jest.fn()

    const tree = shallow<Page>(
      <Page {...defaults} selectBubble={selectBubble} selectType={selectType} />
    )
    tree.find(BubbleChartTabs).simulate('change', type)

    expect(selectBubble).toHaveBeenCalledWith(type, defaults.bubbles[0])
    expect(selectType).toHaveBeenCalledWith(type)
  })

  it('does not throw when type change to show "All" bubbles', () => {
    const type = null
    const selectBubble = jest.fn()
    const selectType = jest.fn()

    const tree = shallow<Page>(
      <Page {...defaults} selectBubble={selectBubble} selectType={selectType} />
    )
    expect(() =>
      tree.find(BubbleChartTabs).simulate('change', type)
    ).not.toThrow()

    expect(selectType).toHaveBeenCalledWith(type)
    expect(selectBubble).not.toHaveBeenCalled()
  })

  it('instantiate the BubbleToggle when selectedType is "null"', () => {
    const tree = shallow<Page>(<Page {...defaults} selectedType={null} />)

    // @ts-ignore: We are just mocking in shallow rendering.
    const ref: BouncingBubbleChart = <div />
    tree.instance().setBubbleChartRef(ref)

    const el = tree.find(BubbleToggle)
    expect(el.exists()).toBe(true)
    expect(el.prop('bubbleChart')).toBe(ref)
  })

  it('does not render BubbleToggle when selectedType is not "null"', () => {
    const tree = shallow<Page>(<Page {...defaults} />)
    const types: BubbleType[] = ['low', 'medium', 'high']

    for (const selectedType in types) {
      tree.setProps({ selectedType: selectedType as BubbleType })
      expect(tree.find(BubbleToggle).exists()).toBe(false)
    }
  })

  it('renders the BouncingBubbleChart component', () => {
    const selectedBubble = BUBBLES[0]
    const tree = shallow<Page>(
      <Page {...defaults} selectedBubble={selectedBubble} />
    )
    const el = tree.find(BouncingBubbleChart)

    expect(el.exists()).toBe(true)
    expect(el.props()).toMatchObject({
      bubbles: defaults.bubbles,
      height: 800,
      onBubbleClick: tree.instance().handleBubbleClick,
      onBubbleFocus: tree.instance().handleSingleBubbleHover,
      onBubbleHover: tree.instance().handleSingleBubbleHover,
      scale: 16.690990544115774,
      selectedId: selectedBubble.id,
      tooltipForBubbleId: null,
      tooltipForType: null,
      type: defaults.selectedType,
      width: 1450,
    })
  })

  it('handles bubble chart hover event', () => {
    const tree = shallow<Page>(<Page {...defaults} />)
    const el = tree.find(BouncingBubbleChart)

    expect(el.prop('tooltipForBubbleId')).toBe(null)

    el.simulate('bubbleHover', 999)
    expect(tree.find(BouncingBubbleChart).prop('tooltipForBubbleId')).toBe(999)
  })

  it('handles bubble chart click event', () => {
    const selectType = jest.fn()
    const selectBubble = jest.fn()

    const tree = shallow<Page>(
      <Page {...defaults} selectBubble={selectBubble} selectType={selectType} />
    )

    tree.find(BouncingBubbleChart).simulate('bubbleClick', 'medium', 1)

    expect(selectBubble).toHaveBeenCalledWith('medium', defaults.bubbles[0])
    expect(selectType).toHaveBeenCalledWith('medium')
  })
})
