import {
  generateRequestId,
  addRequest,
  clearCache,
  deleteRequest,
  getRequest,
} from '../fetch-cache'

afterEach(() => clearCache())

describe('generateRequestId', () => {
  it.each`
    id           | method      | url           | expected
    ${'fun'}     | ${'GET'}    | ${'/foo/bar'} | ${'fun'}
    ${undefined} | ${'DELETE'} | ${'/foo/bar'} | ${'DELETE /foo/bar'}
    ${undefined} | ${'GET'}    | ${'/foo/bar'} | ${'GET /foo/bar'}
    ${undefined} | ${'PATCH'}  | ${'/foo/bar'} | ${'PATCH /foo/bar'}
    ${undefined} | ${'POST'}   | ${'/foo/bar'} | ${expect.stringMatching(/^POST \/foo\/bar [a-z0-9]{9,}$/)}
    ${undefined} | ${'PUT'}    | ${'/foo/bar'} | ${'PUT /foo/bar'}
  `(
    'returns correct ID for $id-$method-$url',
    ({
      id,
      method,
      url,
      expected,
    }: {
      id?: string
      method: string
      url: string
      expected: string
    }) => {
      const key = { id, method, url }
      expect(generateRequestId(key)).toEqual(expected)
    }
  )
})

it('getRequest returns undefined when no matching request', () => {
  const key = { method: 'GET', url: '/foo/bar' }
  expect(getRequest(key)).toBeUndefined()
})

it('getRequest returns matching request when found', () => {
  const key = { method: 'GET', url: '/foo/bar' }
  const promise = Promise.resolve('hi')
  const cancelFn = jest.fn()

  addRequest(key, { promise, cancel: cancelFn })

  expect(getRequest(key)).toEqual({ promise, cancel: cancelFn })
})

it('getRequest never finds a match for post requests to same URL', () => {
  // Statistically, this test should NEVER fail,
  // but it could in very a rare case (Math.random() generates the same value
  // two times in a row)
  const key = { method: 'POST', url: '/foo/bar' }
  const promise = Promise.resolve('hi')
  const cancelFn = jest.fn()

  addRequest(key, { promise, cancel: cancelFn })

  expect(getRequest(key)).toBeUndefined()
})

it('getRequest finds a match for post requests when request key has an ID', () => {
  const key = {
    id: 'my-transaction',
    method: 'POST',
    url: '/foo/bar',
  }
  const promise = Promise.resolve('hi')
  const cancelFn = jest.fn()

  addRequest(key, { promise, cancel: cancelFn })

  expect(getRequest(key)).toEqual({ promise, cancel: cancelFn })
})

it('deleteRequest removes matching request', () => {
  const key = { method: 'GET', url: '/foo/bar' }
  const promise = Promise.resolve('hi')
  const cancelFn = jest.fn()

  addRequest(key, { promise, cancel: cancelFn })

  deleteRequest(key)

  expect(getRequest(key)).toBeUndefined()
})

it('deleteRequest works when matching request does not exist', () => {
  const key = { method: 'GET', url: '/foo/bar' }

  const fn = () => deleteRequest(key)
  expect(fn).not.toThrow()
})
