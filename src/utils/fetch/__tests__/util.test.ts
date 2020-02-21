import { AxiosError } from 'axios'
import {
  addContentTypeHeader,
  createResponseTransformer,
  requestTransformer,
  handleRequestErrors,
} from '../util'

const getItem = window.localStorage.getItem
const removeItem = window.localStorage.removeItem
const setItem = window.localStorage.setItem

beforeEach(() => {
  jest.resetAllMocks()
  delete window.localStorage.getItem
  delete window.localStorage.removeItem
  delete window.localStorage.setItem

  window.localStorage.getItem = jest.fn()
  window.localStorage.removeItem = jest.fn()
  window.localStorage.setItem = jest.fn()
})

afterEach(() => {
  window.localStorage.getItem = getItem
  window.localStorage.removeItem = removeItem
  window.localStorage.setItem = setItem
})

describe('addContentTypeHeader', () => {
  it('does not send a content-type when there is no body', () => {
    const actual = addContentTypeHeader({})
    expect(actual).toEqual({})
  })

  it('uses the contentType when it is provided', () => {
    const actual = addContentTypeHeader({
      body: { foo: 'bar' },
      contentType: 'multipart/form-data',
    })

    expect(actual).toEqual({
      'Content-Type': 'multipart/form-data',
    })
  })

  it('does not set contentType when contentType is falsy', () => {
    const actual = addContentTypeHeader({
      body: { foo: 'bar' },
      contentType: null,
    })

    expect(actual).toEqual({})
  })

  it('defaults to application/json', () => {
    const actual = addContentTypeHeader({
      body: { foo: 'bar' },
    })

    expect(actual).toEqual({
      'Content-Type': 'application/json',
    })
  })
})

describe('createResponseTransformer', () => {
  it('parses content as JSON when contentType is not defined', () => {
    const actual = createResponseTransformer()(
      JSON.stringify({ foo_bar: 'baz' }),
      {}
    )
    expect(actual).toEqual({ fooBar: 'baz' })
  })

  it('parses content as JSON when contentType is application/json', () => {
    const actual = createResponseTransformer()(
      JSON.stringify({ foo_bar: 'baz' }),
      { 'content-type': 'application/json' }
    )
    expect(actual).toEqual({ fooBar: 'baz' })
  })

  it('returns original value when contentType is not application/json', () => {
    const actual = createResponseTransformer()('Hi', {
      'content-type': 'text/plain',
    })

    expect(actual).toEqual('Hi')
  })
})

describe('handleRequestErrors', () => {
  function createErrorResponse(status: number, data: any): AxiosError {
    const error = new Error('Fail')
    /* eslint-disable immutable/no-mutation */
    Object.assign(error, {
      config: {},
      response: { config: {}, headers: {}, statusText: '', status, data },
    })
    /* eslint-enable immutable/no-mutation */
    return error as AxiosError
  }

  it('throws request error when 400', () => {
    const error = createErrorResponse(400, {})
    expect(() => handleRequestErrors(error)).toThrow('Bad Request')
  })

  it('throws unauthorized when 401', () => {
    const error = createErrorResponse(401, {})
    expect(() => handleRequestErrors(error)).toThrow('User is Unauthorized')
  })

  it('throws unauthorized when 403', () => {
    const error = createErrorResponse(403, {})
    expect(() => handleRequestErrors(error)).toThrow('Network request failed')
  })

  it('defaults to "Network request failed"', () => {
    const error = createErrorResponse(404, {})
    expect(() => handleRequestErrors(error)).toThrow('Network request failed')
  })
})

describe('requestTransformer', () => {
  it('defaults to null', () => {
    expect(requestTransformer()).toBeNull()
  })

  it('returns original value when passed null', () => {
    expect(requestTransformer(null)).toBeNull()
  })

  it('returns original value when FormData', () => {
    const body = new FormData()
    const actual = requestTransformer(body)
    expect(actual).toBe(body)
  })

  it('returns original value when Blob', () => {
    const body = new Blob()
    const actual = requestTransformer(body)
    expect(actual).toBe(body)
  })

  it('returns snake-cased JSON when object', () => {
    const body = { fooBar: 'baz' }
    const expected = { foo_bar: 'baz' }
    const actual = requestTransformer(body)
    expect(actual).toEqual(expected)
  })
})
