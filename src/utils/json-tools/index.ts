const camel = (key: string) =>
  key.replace(/_[a-z]/g, (_: string) => _[1].toUpperCase())
const snake = (key: string) =>
  key.replace(/[A-Z]/g, (alpha: string) => `_${alpha.toLowerCase()}`)
const ISO_DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/
const ISO_DATE = /^\d{4,}-\d{2}-\d{2}T\d{2}((:\d{2})?:\d{2}(\.\d+)?([-+]\d{2}:\d{2})?Z?)?$/
const IS_CAPS = /^[A-Z_.]+$/

export const replacer: any = (key: string, value: any) => {
  if (value === null) {
    return value
  }
  if (typeof value === 'object' && !Array.isArray(value)) {
    return Object.keys(value).reduce((object: any, key) => {
      const newKey = IS_CAPS.test(key) ? key : snake(key)
      // eslint-disable-next-line immutable/no-mutation
      object[newKey] = value[key]
      return object
    }, {})
  }
  return value
}

export const reviver: any = (key: any, value: any) => {
  if (value === null) {
    return value
  }
  if (typeof value === 'string' && ISO_DATE_ONLY.test(value)) {
    const [year, month, day] = value.split(/-/).map(Number)
    return new Date(year, month - 1, day)
  } else if (typeof value === 'string' && ISO_DATE.test(value)) {
    return new Date(value)
  } else if (typeof value === 'object' && !Array.isArray(value)) {
    return Object.keys(value).reduce((object: any, key) => {
      const newKey = IS_CAPS.test(key) ? key : camel(key)
      // eslint-disable-next-line immutable/no-mutation
      object[newKey] = value[key]
      return object
    }, {})
  }
  return value
}
