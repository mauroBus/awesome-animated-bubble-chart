import { AxiosError } from 'axios'
import { replacer, reviver } from '../../utils/json-tools'

type Headers = { [headerName: string]: any }
type RequestBody = Object | FormData | Blob | null

export function addContentTypeHeader(params: {
  body?: RequestBody
  contentType?: string | null
}): Headers {
  if (params.body) {
    if ('contentType' in params) {
      if (params.contentType) {
        return { 'Content-Type': params.contentType }
      }
    } else {
      return { 'Content-Type': 'application/json' }
    }
  }
  return {}
}

export const createResponseTransformer = () => (
  data: string,
  headers: Headers
) => {
  const contentType = headers['content-type'] || 'application/json'
  if (contentType.startsWith('application/json')) {
    return data ? JSON.parse(data, reviver) : null
  }
  return data
}

export function handleRequestErrors(error: AxiosError) {
  const responseStatus = error.response ? error.response.status : null
  switch (responseStatus) {
    case 400:
      throw new Error('Bad Request')
    case 401:
      throw new Error('User is Unauthorized')
    default:
      throw new Error('Network request failed')
  }
}

export function requestTransformer(data: RequestBody = null) {
  return data && !(data instanceof FormData || data instanceof Blob)
    ? JSON.parse(JSON.stringify(data, replacer))
    : data
}
