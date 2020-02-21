import { shallow } from 'enzyme'
import React from 'react'
import { BubbleChartTabs } from '../index'

const tabs = '[data-qa="tabs"]'
const allTab = '[data-qa="allTab"]'
const lowTab = '[data-qa="lowTab"]'
const mediumTab = '[data-qa="mediumTab"]'
const highTab = '[data-qa="highTab"]'

describe('BubbleChart::BubbleChartTabs', () => {
  const defaults = {
    onChange() {},
    activeTab: 'low' as BubbleType,
  }

  it('renders tabs container with four options', () => {
    const tree = shallow<BubbleChartTabs>(<BubbleChartTabs {...defaults} />)
    expect(tree.find(tabs).exists()).toBe(true)
    expect(tree.find(allTab).exists()).toBe(true)
    expect(
      tree
        .find(allTab)
        .dive()
        .children()
        .text()
    ).toBe('All')
    expect(tree.find(lowTab).exists()).toBe(true)
    expect(
      tree
        .find(lowTab)
        .dive()
        .children()
        .text()
    ).toBe('Low')
    expect(tree.find(mediumTab).exists()).toBe(true)
    expect(
      tree
        .find(mediumTab)
        .dive()
        .children()
        .text()
    ).toBe('Medium')
    expect(tree.find(highTab).exists()).toBe(true)
    expect(
      tree
        .find(highTab)
        .dive()
        .children()
        .text()
    ).toBe('High')
  })

  it('highlights the active tab', () => {
    const tree = shallow<BubbleChartTabs>(
      <BubbleChartTabs {...defaults} activeTab="low" />
    )

    expect(tree.find(allTab).prop('aria-selected')).toBe(false)
    expect(tree.find(lowTab).prop('aria-selected')).toBe(true)
    expect(tree.find(mediumTab).prop('aria-selected')).toBe(false)
    expect(tree.find(highTab).prop('aria-selected')).toBe(false)

    const tabsSel = [allTab, lowTab, mediumTab, highTab]
    const tabNames: Array<BubbleType | null> = [null, 'low', 'medium', 'high']
    tabsSel.forEach((tabSel, index) => {
      tree.setProps({ activeTab: tabNames[index] })
      const el = tree.find(tabSel)
      expect(el.prop('aria-selected')).toBe(true)
      expect(el.prop('color')).toBe('secondary')
    })
  })

  it('calls onChange when a given tab is selected', () => {
    const onChange = jest.fn()
    const tree = shallow<BubbleChartTabs>(
      <BubbleChartTabs {...defaults} onChange={onChange} />
    )
    const tabsSel = [allTab, lowTab, mediumTab, highTab]
    const tabNames: Array<BubbleType | null> = [null, 'low', 'medium', 'high']
    tabsSel.forEach((tabSel, index) => {
      tree.find(tabSel).simulate('click')
      expect(onChange).toHaveBeenCalledWith(tabNames[index])
    })
  })
})
