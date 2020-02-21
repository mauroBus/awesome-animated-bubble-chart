import axios, { AxiosRequestConfig } from 'axios'
import { addRequest, deleteRequest, getRequest } from './fetch-cache'
import { createRequest as createFetchRequest } from './fetch-factory'

// We are opening this up to allow any valid axios request config field.
// The primary motivation is to give testers the ability to set or
// override specific fields that might be necessary for the test env.
export type RequestParams = {
  id?: string
  method: string
  url: string
  body?: Object | FormData | Blob | null
  contentType?: string
  suppressCancelErrors?: boolean
} & AxiosRequestConfig

function createRequest({
  suppressCancelErrors = true,
  ...requestParams
}: RequestParams): Promise<any> {
  // Handle pending requests
  const request = getRequest(requestParams)
  if (request) {
    // If a GET, then just re-use the current request.
    if (requestParams.method === 'GET') {
      return request.promise
    }
    request.cancel()
  }
  const newRequest = createFetchRequest(requestParams)
  addRequest(requestParams, newRequest)

  return newRequest.promise.then(
    result => {
      deleteRequest(requestParams)
      return result
    },
    error => {
      deleteRequest(requestParams)
      if (!axios.isCancel(error) || !suppressCancelErrors) {
        throw error
      }
    }
  )
}

function cancelRequest(requestParams: RequestParams) {
  const request = getRequest(requestParams)
  if (request) {
    request.cancel()
    deleteRequest(requestParams)
  }
}

export const fetchApi = {
  createRequest,
  cancelRequest,
}
