import * as types from './_actionTypes'

export type BubbleActionType =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailureAction
  | SelectBubbleAction
  | SelectTypeAction

export type FetchStartAction = {
  type: typeof types.BUBBLES_FETCH_START
  method: 'GET'
  url: '/api/bubbles'
}
export type FetchSuccessAction = {
  type: typeof types.BUBBLES_FETCH_SUCCESS
  initiator: FetchStartAction
  payload: BubblesPayload
}
export type FetchFailureAction = {
  type: typeof types.BUBBLES_FETCH_FAILURE
  initiator: FetchStartAction
}

export type SelectTypeAction = {
  type: typeof types.SELECT_TYPE
  selectedType: BubbleType | null
}

export type SelectBubbleAction = {
  type: typeof types.SELECT_BUBBLE
  selectedBubble: Bubble | null
  selectedType: BubbleType | null
}

export const fetch = (): FetchStartAction => ({
  type: types.BUBBLES_FETCH_START,
  method: 'GET',
  url: '/api/bubbles',
})

export const selectBubble = (
  selectedType: BubbleType | null,
  selectedBubble: Bubble | null
): SelectBubbleAction => ({
  type: types.SELECT_BUBBLE,
  selectedBubble,
  selectedType,
})

export const selectType = (
  selectedType: BubbleType | null
): SelectTypeAction => ({
  type: types.SELECT_TYPE,
  selectedType,
})
