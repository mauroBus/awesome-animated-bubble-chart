declare global {
  type FetchStatus = 'LOADING' | 'SUCCESS' | 'ERROR' | 'UNSENT'

  type FetchStatusMap<Key extends string | number | symbol> = Record<
    Key,
    FetchStatus
  >
}

export {}
