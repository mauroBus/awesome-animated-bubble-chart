import { MiddlewareAPI, Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'
import {
  FETCH_START,
  FETCH_CANCEL,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './fetch.types'

type RequestParams = {
  id?: string
  method: string
  url: string
  body?: Object | FormData | Blob | null
  contentType?: string
}
type StartAction = RequestParams & {
  type: string
}

const fromStartTo = (targetSuffix: string) => (actionType: string) => {
  const prefix = actionType.slice(0, -FETCH_START.length)
  return prefix + targetSuffix
}

const asSuccessAction = fromStartTo(FETCH_SUCCESS)
const asFailureAction = fromStartTo(FETCH_FAILURE)

export interface RequestFacade {
  cancelRequest(params: RequestParams): void
  createRequest(params: RequestParams): Promise<any>
}

export const fetchMiddleware = (facade: RequestFacade) => (
  store: MiddlewareAPI<any, any>
) => (next: Dispatch<StartAction>) => (action: StartAction) => {
  if (action.type.endsWith(FETCH_CANCEL)) {
    facade.cancelRequest(action)
    return next(action)
  }

  if (action.type.endsWith(FETCH_START)) {
    const promise = facade.createRequest(action)
    next(action)
    return promise
      .then(({ data: payload }) => {
        store.dispatch({
          type: asSuccessAction(action.type),
          payload,
          initiator: action,
        })
        return payload
      })
      .catch((error: AxiosError) => {
        if (!axios.isCancel(error)) {
          store.dispatch({
            type: asFailureAction(action.type),
            payload: error.response ? error.response.data : null,
            error,
            initiator: action,
            request: error.request,
          })
        }
        // Propagate error to consumers so that they don't assume code was successful.
        throw error
      })
  }

  return next(action)
}
