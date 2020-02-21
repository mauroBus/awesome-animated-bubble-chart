import { shallow } from 'enzyme'
import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { BUBBLES } from './bubbles.data'
import { Page } from '../page'
import { BubbleChart } from '../index'

describe('BubbleChart', () => {
  const defaults = {
    fetch() {},
    selectType() {},
    selectBubble() {},
    bubbles: BUBBLES,
    selectedBubble: null,
    selectedType: null,
    type: 'low' as BubbleType,
  }

  const windowOpen = window.open
  beforeEach(() => {
    window.open = jest.fn()
  })
  afterEach(() => {
    window.open = windowOpen
  })

  it('fetches data on mount', () => {
    const fetch = jest.fn()
    shallow<BubbleChart>(
      <BubbleChart {...defaults} fetchStatus="UNSENT" fetch={fetch} />
    )
    expect(fetch).toHaveBeenCalled()
  })

  it('does not fetch data on mount if already loaded', () => {
    const fetch = jest.fn()
    shallow<BubbleChart>(
      <BubbleChart {...defaults} fetchStatus="SUCCESS" fetch={fetch} />
    )
    expect(fetch).not.toHaveBeenCalled()
  })

  it('shows a loading when data is pending', () => {
    const tree = shallow<BubbleChart>(
      <BubbleChart {...defaults} fetchStatus="LOADING" />
    )
    expect(tree.find(CircularProgress).exists()).toBe(true)
    expect(tree.find(Page).exists()).toBe(false)
  })

  it('instantiate the Page component when data is available', () => {
    const tree = shallow<BubbleChart>(
      <BubbleChart {...defaults} fetchStatus="SUCCESS" />
    )
    expect(tree.find(CircularProgress).exists()).toBe(false)
    expect(tree.find(Page).exists()).toBe(true)
    expect(tree.find(Page).props()).toMatchObject({
      bubbles: defaults.bubbles,
      selectBubble: expect.any(Function),
      selectedBubble: defaults.selectedBubble,
      selectedType: defaults.selectedType,
      selectType: expect.any(Function),
    })
  })
})
