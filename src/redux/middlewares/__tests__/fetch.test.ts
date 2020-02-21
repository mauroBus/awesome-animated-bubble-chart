import { AxiosError } from 'axios'
import { createStore, applyMiddleware, Dispatch, Action } from 'redux'
import {
  FETCH_START,
  FETCH_CANCEL,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../fetch.types'
import { fetchMiddleware, RequestFacade } from '../fetch'

jest.mock('../../../utils/fetch')

function mock<T>(unmocked: T) {
  return unmocked as T & jest.Mock
}

function createFetchFacade() {
  return {
    cancelRequest: jest.fn().mockName('cancelRequest'),
    createRequest: jest.fn().mockName('createRequest'),
  }
}
function createNextActionLoggerMiddleware(cb: (action: any) => void) {
  return () => (next: Dispatch) => (action: Action) => {
    cb(action)
    next(action)
  }
}

function createStoreWithNextActionLogger(
  fetchFacade: RequestFacade,
  nextActionLogger: (action: any) => void
) {
  return createStore(
    (state = {}) => state,
    applyMiddleware(
      fetchMiddleware(fetchFacade),
      createNextActionLoggerMiddleware(nextActionLogger)
    )
  )
}

beforeEach(() => jest.resetAllMocks())

it('passes on non-fetch actions', () => {
  const fetchFacade = createFetchFacade()
  const nextActionLogger = jest.fn()
  const store = createStoreWithNextActionLogger(fetchFacade, nextActionLogger)

  const action = { type: 'not.fetch' }

  store.dispatch(action)

  expect(nextActionLogger).toHaveBeenCalledWith(action)
  expect(fetchFacade.cancelRequest).not.toHaveBeenCalled()
  expect(fetchFacade.createRequest).not.toHaveBeenCalled()
})

it('cancels request when action type ends with FETCH_CANCEL', () => {
  const fetchFacade = createFetchFacade()
  const nextActionLogger = jest.fn()
  const store = createStoreWithNextActionLogger(fetchFacade, nextActionLogger)

  const action = { type: 'agenda.' + FETCH_CANCEL }

  store.dispatch(action)

  expect(nextActionLogger).toHaveBeenCalledWith(action)
  expect(fetchFacade.cancelRequest).toHaveBeenCalledWith(action)
})

describe('when action type ends with FETCH_START', () => {
  it('creates request', () => {
    const fetchFacade = createFetchFacade()
    const nextActionLogger = jest.fn()
    const store = createStoreWithNextActionLogger(fetchFacade, nextActionLogger)
    mock(fetchFacade.createRequest).mockResolvedValue({})

    const action = { type: 'agenda.' + FETCH_START }

    store.dispatch(action)

    expect(nextActionLogger).toHaveBeenCalledWith(action)
    expect(fetchFacade.createRequest).toHaveBeenCalledWith(action)
  })

  it('returns a promise', () => {
    const fetchFacade = createFetchFacade()
    const nextActionLogger = jest.fn()
    const store = createStoreWithNextActionLogger(fetchFacade, nextActionLogger)
    const payload = { foo: 'bar' }
    mock(fetchFacade.createRequest).mockResolvedValue({ data: payload })
    const action = { type: 'agenda.' + FETCH_START }

    const actual = store.dispatch(action)

    return expect(actual).resolves.toEqual(payload)
  })
  it('dispatches success action on request fulfillment', async () => {
    const fetchFacade = createFetchFacade()
    const nextActionLogger = jest.fn()
    const store = createStoreWithNextActionLogger(fetchFacade, nextActionLogger)
    const payload = { foo: 'bar' }
    mock(fetchFacade.createRequest).mockResolvedValue({ data: payload })
    const action = { type: 'agenda.' + FETCH_START }

    await store.dispatch(action)

    const actions = nextActionLogger.mock.calls.map(args => args[0])

    expect(actions[0]).toEqual({ type: 'agenda.' + FETCH_START })
    expect(actions[1]).toEqual({
      initiator: {
        type: 'agenda.' + FETCH_START,
      },
      payload: {
        foo: 'bar',
      },
      type: 'agenda.' + FETCH_SUCCESS,
    })
  })
  it('dispatches failure action on request error', async () => {
    const fetchFacade = createFetchFacade()
    const nextActionLogger = jest.fn()
    const store = createStoreWithNextActionLogger(fetchFacade, nextActionLogger)
    const error: AxiosError = new Error('Failure!') as AxiosError
    Object.assign(error, {
      response: {
        data: 'You have insufficient rights',
      },
    })
    mock(fetchFacade.createRequest).mockRejectedValue(error)
    const action = { type: 'agenda.' + FETCH_START }

    try {
      await store.dispatch(action)
    } catch (err) {
      const actions = nextActionLogger.mock.calls.map(args => args[0])

      expect(actions[0]).toEqual({ type: 'agenda.' + FETCH_START })
      expect(actions[1]).toEqual({
        type: 'agenda.' + FETCH_FAILURE,
        payload: 'You have insufficient rights',
        error,
        initiator: {
          type: 'agenda.' + FETCH_START,
        },
      })
      expect(err).toEqual(error)
    }
    expect.assertions(3)
  })

  it('dispatches failure action when response data is falsy', async () => {
    const fetchFacade = createFetchFacade()
    const nextActionLogger = jest.fn()
    const store = createStoreWithNextActionLogger(fetchFacade, nextActionLogger)
    const error: AxiosError = new Error('Failure!') as AxiosError
    mock(fetchFacade.createRequest).mockRejectedValue(error)
    const action = { type: 'agenda.' + FETCH_START }

    try {
      await store.dispatch(action)
    } catch (err) {
      const actions = nextActionLogger.mock.calls.map(args => args[0])

      expect(actions[0]).toEqual({ type: 'agenda.' + FETCH_START })
      expect(actions[1]).toEqual({
        type: 'agenda.' + FETCH_FAILURE,
        payload: null,
        error,
        initiator: {
          type: 'agenda.' + FETCH_START,
        },
      })
      expect(err).toEqual(error)
    }
    expect.assertions(3)
  })
})
