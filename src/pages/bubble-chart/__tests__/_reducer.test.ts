import * as types from '../_actionTypes'
import { BUBBLES } from './bubbles.data'
import reducer from '../_reducer'

describe('BubbleChart::reducer', () => {
  // @ts-ignore
  const defaultState = reducer(undefined, {})

  it('defaults the state', () => {
    expect(defaultState).toEqual({
      bubbles: [],
      selectedBubble: null,
      selectedType: null,
      statusses: {
        fetch: 'UNSENT',
      },
    })
  })

  it('sets the fetch status on BUBBLES_FETCH_START', () => {
    // @ts-ignore
    const afterState = reducer(defaultState, {
      type: types.BUBBLES_FETCH_START,
      method: 'GET',
      url: '/api/bubbles',
    })
    expect(afterState).toEqual({
      ...defaultState,
      statusses: {
        fetch: 'LOADING',
      },
    })
  })

  it('sets bubbles data on BUBBLES_FETCH_SUCCESS', () => {
    const beforeState = {
      ...defaultState,
      statusses: {
        fetch: 'LOADING' as FetchStatus,
      },
    }
    const afterState = reducer(beforeState, {
      type: types.BUBBLES_FETCH_SUCCESS,
      payload: {
        elements: BUBBLES,
        currentPage: 1,
        totalPages: 10,
        totalElements: 100,
      },
      initiator: {
        type: types.BUBBLES_FETCH_START,
        method: 'GET',
        url: '/api/bubbles',
      },
    })

    expect(afterState).toEqual({
      ...defaultState,
      bubbles: BUBBLES,
      statusses: {
        fetch: 'SUCCESS',
      },
    })
  })

  it('sets error on BUBBLES_FETCH_FAILURE', () => {
    const beforeState = {
      ...defaultState,
      statusses: {
        fetch: 'LOADING' as FetchStatus,
      },
    }

    const afterState = reducer(beforeState, {
      type: types.BUBBLES_FETCH_FAILURE,
      initiator: {
        type: types.BUBBLES_FETCH_START,
        method: 'GET',
        url: '/api/bubbles',
      },
    })
    expect(afterState).toEqual({
      ...defaultState,
      statusses: {
        fetch: 'ERROR',
      },
    })
  })

  it('selects a bubble type on SELECT_TYPE', () => {
    const beforeState = {
      ...defaultState,
      selectedType: 'medium' as BubbleType,
      statusses: {
        fetch: 'UNSENT' as FetchStatus,
      },
    }
    const afterState = reducer(beforeState, {
      type: types.SELECT_TYPE,
      selectedType: 'low',
    })
    expect(afterState).toEqual({
      ...defaultState,
      selectedType: 'low',
    })
  })

  it('selects a bubble (and its type) on SELECT_BUBBLE', () => {
    const beforeState = {
      ...defaultState,
      selectedType: null,
      selectedBubble: null,
      statusses: {
        fetch: 'UNSENT' as FetchStatus,
      },
    }
    const selectedBubble = BUBBLES[0]
    const afterState = reducer(beforeState, {
      type: types.SELECT_BUBBLE,
      selectedBubble,
      selectedType: 'high',
    })
    expect(afterState).toEqual({
      ...defaultState,
      selectedBubble,
      selectedType: 'high',
    })
  })
})
