import { BubbleActionType } from './_actions'
import {
  BUBBLES_FETCH_START,
  BUBBLES_FETCH_SUCCESS,
  BUBBLES_FETCH_FAILURE,
  SELECT_TYPE,
  SELECT_BUBBLE,
} from './_actionTypes'

export type State = {
  bubbles: Bubble[]
  selectedBubble: Bubble | null
  selectedType: BubbleType | null
  statusses: FetchStatusMap<'fetch'>
}

const initialState: State = {
  bubbles: [],
  selectedBubble: null,
  selectedType: null,
  statusses: {
    fetch: 'UNSENT' as FetchStatus,
  },
}

export default (state: State = initialState, action: BubbleActionType) => {
  switch (action.type) {
    case BUBBLES_FETCH_START:
      return {
        ...state,
        statusses: {
          ...state.statusses,
          fetch: 'LOADING',
        },
      }

    case BUBBLES_FETCH_SUCCESS:
      return {
        ...state,
        bubbles: action.payload.elements,
        statusses: {
          ...state.statusses,
          fetch: 'SUCCESS',
        },
      }

    case BUBBLES_FETCH_FAILURE:
      return {
        ...state,
        statusses: {
          ...state.statusses,
          fetch: 'ERROR',
        },
      }

    case SELECT_BUBBLE:
      return {
        ...state,
        selectedBubble: action.selectedBubble,
        selectedType: action.selectedType,
      }

    case SELECT_TYPE:
      return {
        ...state,
        selectedType: action.selectedType,
      }

    default:
      return state
  }
}
