import axios from 'axios'
import { fetchApi, RequestParams } from '../index'
import { getRequest, addRequest, deleteRequest } from '../fetch-cache'
import { createRequest as createFetchRequest } from '../fetch-factory'

jest.mock('../fetch-cache')
jest.mock('../fetch-factory')

function mock<T>(unmocked: T) {
  return unmocked as T & jest.Mock
}

const resolve = (value: any = {}) => ({
  promise: Promise.resolve(value),
  cancel: jest.fn().mockName('cancel'),
})

const reject = (err: any) => ({
  promise: Promise.reject(err),
  cancel: jest.fn().mockName('cancel'),
})

const GET_REQUEST: RequestParams = {
  method: 'GET',
  url: '/foo/bar',
  baseURL: 'https://fake.street:1234',
}

beforeEach(() => jest.resetAllMocks())
test('creates a new request when not in cache', async () => {
  const promise = resolve()
  mock(createFetchRequest).mockReturnValue(promise)
  await fetchApi.createRequest(GET_REQUEST)
  expect(createFetchRequest).toHaveBeenCalledWith(GET_REQUEST)
  expect(addRequest).toHaveBeenCalledWith(GET_REQUEST, promise)
})

test('returns original promise when GET request is found in cache', () => {
  const createdRequest = resolve()
  mock(getRequest).mockReturnValue(createdRequest)
  const actual = fetchApi.createRequest(GET_REQUEST)

  expect(actual).toBe(createdRequest.promise)
  expect(getRequest).toHaveBeenCalledWith(GET_REQUEST)
  expect(createFetchRequest).not.toHaveBeenCalled()
  expect(addRequest).not.toHaveBeenCalled()
})

test('cancels and starts a new request when non-GET request is found in cache', () => {
  const requestParams: RequestParams = {
    ...GET_REQUEST,
    method: 'POST',
    body: { baz: 'qux' },
  }
  const createdRequest = resolve()
  const createdRequest2 = resolve()
  mock(getRequest).mockReturnValue(createdRequest)
  mock(createFetchRequest).mockReturnValue(createdRequest2)

  const actual = fetchApi.createRequest(requestParams)

  expect(actual).not.toBe(createdRequest.promise)
  expect(createdRequest.cancel).toHaveBeenCalled()
  expect(createFetchRequest).toHaveBeenCalledWith(requestParams)
  expect(addRequest).toHaveBeenCalledWith(requestParams, createdRequest2)
})

test('passes api result', async () => {
  const value = {
    foo: 'bar',
  }
  const createdRequest = resolve(value)
  mock(createFetchRequest).mockReturnValue(createdRequest)

  const actual = await fetchApi.createRequest(GET_REQUEST)

  expect(actual).toEqual(value)
})

test('passes error on failure', async () => {
  expect.assertions(1)
  const error = new Error('failure!')
  const createdRequest = reject(error)
  mock(createFetchRequest).mockReturnValue(createdRequest)

  try {
    await fetchApi.createRequest(GET_REQUEST)
  } catch (e) {
    expect(e).toEqual(error)
  }
})

test('suppresses error when cancelled by default', async () => {
  const error = new axios.Cancel('Request cancelled')
  const createdRequest = reject(error)
  mock(createFetchRequest).mockReturnValue(createdRequest)

  await expect(fetchApi.createRequest(GET_REQUEST)).resolves.toBeUndefined()
})

test('throws an error when cancelled and suppressCancelErrors is false', async () => {
  expect.assertions(1)
  const error = new axios.Cancel('Request cancelled')
  const createdRequest = reject(error)
  mock(createFetchRequest).mockReturnValue(createdRequest)

  try {
    await fetchApi.createRequest({
      ...GET_REQUEST,
      suppressCancelErrors: false,
    })
  } catch (e) {
    expect(e).toEqual(error)
  }
})

test('deletes request on promise fulfillment', async () => {
  mock(createFetchRequest).mockReturnValue(resolve())

  await fetchApi.createRequest(GET_REQUEST)

  expect(deleteRequest).toHaveBeenCalledWith(GET_REQUEST)
})

test('deletes request on promise rejection', async () => {
  expect.assertions(1)
  mock(createFetchRequest).mockReturnValue(reject(new Error('failure!')))

  try {
    await fetchApi.createRequest(GET_REQUEST)
  } catch (e) {
    expect(deleteRequest).toHaveBeenCalledWith(GET_REQUEST)
  }
})

test('cancels and deletes request when found', () => {
  const createdRequest = resolve()
  mock(getRequest).mockReturnValue(createdRequest)

  fetchApi.cancelRequest(GET_REQUEST)
  expect(createdRequest.cancel).toHaveBeenCalled()
  expect(deleteRequest).toHaveBeenCalledWith(GET_REQUEST)
})

test('does nothing when no matching request is found', () => {
  fetchApi.cancelRequest(GET_REQUEST)
  expect(deleteRequest).not.toHaveBeenCalled()
})
