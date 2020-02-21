import { FETCH_START } from '../../../redux/middlewares/fetch.types'
import { BUBBLES } from './bubbles.data'
import * as types from '../_actionTypes'
import * as creators from '../_actions'

describe('BubbleChart::actions', () => {
  it('creates a "fetch" action', () => {
    const action = creators.fetch()

    expect(action.type.endsWith(FETCH_START)).toBe(true)
    expect(action).toEqual({
      type: types.BUBBLES_FETCH_START,
      method: 'GET',
      url: '/api/bubbles',
    })
  })

  it('creates a "selectBubble" action', () => {
    const selectedBubble = BUBBLES[0]
    const selectedType = 'low' as BubbleType
    const action = creators.selectBubble(selectedType, selectedBubble)

    expect(action).toEqual({
      type: types.SELECT_BUBBLE,
      selectedBubble,
      selectedType,
    })
  })

  it('creates a "selectType" action', () => {
    const selectedType = 'low' as BubbleType
    const action = creators.selectType(selectedType)

    expect(action).toEqual({
      type: types.SELECT_TYPE,
      selectedType,
    })
  })
})
