import axios, { AxiosResponse } from 'axios'
import { requestTransformer } from '../util'
import { createRequest, initialize } from '../fetch-factory'

function fakeAxiosResponse(data): AxiosResponse {
  return {
    config: {},
    headers: {},
    status: 200,
    statusText: 'OK',
    data,
  }
}

describe('fetch factory', () => {
  const consoleError = console.error
  let consoleErrorMock: jest.Mock
  beforeEach(() => {
    consoleErrorMock = jest.fn()
    console.error = consoleErrorMock
  })

  afterEach(() => {
    console.error = consoleError
  })

  it('initialize adds the correct interceptors', () => {
    const instance = axios.create()
    jest.spyOn(instance.interceptors.request, 'use')
    jest.spyOn(instance.interceptors.response, 'use')
    initialize(instance)

    expect(instance.defaults.transformRequest).toContain(requestTransformer)
    expect(instance.interceptors.response.use).toHaveBeenCalled()
  })

  describe('defaultTransformers', () => {
    it('handles missing default transformers', () => {
      axios.defaults.transformRequest = undefined
      const instance = axios.create()
      initialize(instance)

      expect(instance.defaults.transformRequest).toContain(requestTransformer)
    })

    it('handles an array of default transformers', () => {
      const exampleAxiosTransformer = data => data
      axios.defaults.transformRequest = [exampleAxiosTransformer]
      const instance = axios.create()
      initialize(instance)

      expect(instance.defaults.transformRequest).toContain(requestTransformer)
      expect(instance.defaults.transformRequest).toContain(
        exampleAxiosTransformer
      )
    })

    it('handles a default transformer not in an array', () => {
      const exampleAxiosTransformer = data => data
      axios.defaults.transformRequest = exampleAxiosTransformer
      const instance = axios.create()
      initialize(instance)

      expect(instance.defaults.transformRequest).toContain(requestTransformer)
      expect(instance.defaults.transformRequest).toContain(
        exampleAxiosTransformer
      )
    })
  })

  it('creates request', () => {
    const axiosInstance = axios.create()
    initialize(axiosInstance)
    const source = axios.CancelToken.source()
    jest.spyOn(axios.CancelToken, 'source').mockReturnValue(source)

    jest
      .spyOn(axiosInstance, 'request')
      .mockResolvedValue(fakeAxiosResponse({}))

    createRequest({
      method: 'POST',
      url: '/foo/bar',
      body: { foo: 'bar ' },
      params: { userId: '50' },
    })

    expect(axiosInstance.request).toHaveBeenCalledWith({
      method: 'POST',
      url: '/foo/bar',
      data: { foo: 'bar ' },
      cancelToken: source.token,
      headers: expect.any(Object),
      transformResponse: expect.any(Function),
      params: { userId: '50' },
    })
  })

  it('returns the correct values', () => {
    const axiosInstance = axios.create()
    initialize(axiosInstance)

    const promise = Promise.resolve(fakeAxiosResponse({}))
    jest.spyOn(axiosInstance, 'request').mockReturnValue(promise)

    const actual = createRequest({
      method: 'POST',
      url: '/foo/bar',
      body: { foo: 'bar ' },
    })

    expect(actual).toEqual({
      promise,
      cancel: expect.any(Function),
    })
  })

  it('cancel delegates to axios cancel', () => {
    const axiosInstance = axios.create()
    initialize(axiosInstance)
    const source = axios.CancelToken.source()
    jest.spyOn(source, 'cancel')
    jest.spyOn(axios.CancelToken, 'source').mockReturnValue(source)

    jest
      .spyOn(axiosInstance, 'request')
      .mockResolvedValue(fakeAxiosResponse({}))

    const actual = createRequest({
      method: 'POST',
      url: '/foo/bar',
      body: { foo: 'bar ' },
    })
    actual.cancel()
    expect(source.cancel).toHaveBeenCalled()
  })

  it('handles default reject handler', async () => {
    const axiosInstance = axios.create()
    initialize(axiosInstance)

    const error = new Error('Some bad error')
    jest.spyOn(axiosInstance, 'request').mockRejectedValue(error)

    try {
      await createRequest({
        method: 'POST',
        url: '/foo/bar',
        body: { foo: 'bar ' },
      }).promise
    } catch (e) {
      expect(consoleErrorMock).toHaveBeenCalledWith(error)
      expect(e).toBe(error)
    }
  })
})
