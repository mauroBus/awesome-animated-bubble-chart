import axios, { AxiosError, AxiosInstance, AxiosTransformer } from 'axios'
import { RequestParams } from './index'
import {
  addContentTypeHeader,
  createResponseTransformer,
  handleRequestErrors,
  requestTransformer,
} from './util'

function defaultTransformers(
  transformers: AxiosTransformer[] | AxiosTransformer | undefined
): AxiosTransformer[] {
  if (!transformers) {
    return []
  } else if (transformers instanceof Array) {
    return transformers
  } else {
    return [transformers]
  }
}

let axiosInstance: AxiosInstance

export function initialize(newInstance: AxiosInstance = axios.create()) {
  // eslint-disable-next-line immutable/no-mutation
  newInstance.defaults.transformRequest = [
    requestTransformer,
    ...defaultTransformers(axios.defaults.transformRequest),
  ]
  newInstance.interceptors.response.use(undefined, (error: AxiosError) =>
    handleRequestErrors(error)
  )
  axiosInstance = newInstance
}

export function createRequest({
  method,
  url,
  body,
  contentType,
  ...requestConfig
}: RequestParams): {
  promise: Promise<any>
  cancel: () => any
} {
  const headers = {
    ...addContentTypeHeader({ body, contentType }),
  }
  const source = axios.CancelToken.source()
  const promise = axiosInstance.request({
    method,
    url,
    data: body,
    cancelToken: source.token,
    headers,
    transformResponse: createResponseTransformer(),
    ...requestConfig,
  })

  promise.catch(console.error)

  return {
    promise,
    cancel() {
      source.cancel()
    },
  }
}

initialize()
