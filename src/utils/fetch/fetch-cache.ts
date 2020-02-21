type RequestKey = {
  id?: string
  method: string
  url: string
}

type PendingRequest = {
  promise: Promise<any>
  cancel: () => any
}

const requests: Map<string, PendingRequest> = new Map()

export function generateRequestId(key: RequestKey) {
  if (key.id) {
    return key.id
  }
  const baseId = `${key.method} ${key.url}`
  return key.method === 'POST'
    ? `${baseId} ${Math.random()
        .toString(36)
        .slice(2)}`
    : baseId
}

export function getRequest(key: RequestKey): PendingRequest | undefined {
  const id = generateRequestId(key)
  return requests.get(id)
}

export function addRequest(key: RequestKey, value: PendingRequest) {
  const id = generateRequestId(key)
  requests.set(id, value)
}

export function deleteRequest(key: RequestKey) {
  const id = generateRequestId(key)
  requests.delete(id)
}

export function clearCache() {
  requests.clear()
}
