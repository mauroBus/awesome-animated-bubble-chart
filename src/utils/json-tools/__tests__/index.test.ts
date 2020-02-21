import { replacer, reviver } from '../'

const arrayCamelCase = [{ forcePowers: 'levitation' }, 2]
const arraySnakeCaseJSON = '[{"force_powers":"levitation"},2]'
const timeString = '2017-03-02T22:17:46.546Z'
const time = new Date(timeString)
const dateString = '2017-03-02T22:17:00.000Z'
const date = new Date(dateString)
const objectCamelCase = {
  aTest: {
    ALL_CAPS_LEAVE_ALONE: true,
    moreStuff: ['Item 1', 'Item 2'],
    nested: {
      randomObject: {
        time,
      },
    },
  },
  date,
  forceWield: 5.5,
  age: time,
  nullValue: null,
}
const objectSnakeCase = {
  a_test: {
    ALL_CAPS_LEAVE_ALONE: true,
    more_stuff: ['Item 1', 'Item 2'],
    nested: {
      random_object: {
        time: timeString,
      },
    },
  },
  date: dateString,
  force_wield: 5.5,
  age: timeString,
  null_value: null,
}
const objectSnakeCaseJSON = JSON.stringify(objectSnakeCase)

describe('replacer', () => {
  it("doesn't affect stringifying number", () => {
    expect(JSON.stringify(1, replacer)).toBe('1')
  })

  it("doesn't affect stringifying string", () => {
    expect(JSON.stringify('1', replacer)).toBe('"1"')
  })

  it('converts camelCase array to snake_case JSON', () => {
    expect(JSON.stringify(arrayCamelCase, replacer)).toBe(arraySnakeCaseJSON)
  })

  it('converts camelCase object to snake_case JSON', () => {
    expect(JSON.stringify(objectCamelCase, replacer)).toBe(objectSnakeCaseJSON)
  })
})

describe('reviver', () => {
  it("doesn't affect parsing number", () => {
    expect(JSON.parse('1', reviver)).toBe(1)
  })

  it("doesn'nt affect parsing string", () => {
    expect(JSON.parse('"1"', reviver)).toBe('1')
  })

  it('converts snake_case JSON to camelCase array', () => {
    expect(JSON.parse(arraySnakeCaseJSON, reviver)).toEqual(arrayCamelCase)
  })

  it('converts snake_case JSON to camelCase object', () => {
    expect(JSON.parse(objectSnakeCaseJSON, reviver)).toEqual(objectCamelCase)
  })

  it('identifies and parses dates', () => {
    var object = JSON.parse(objectSnakeCaseJSON, reviver)
    expect(object.aTest.nested.randomObject.time).toEqual(time)
  })

  it('identifies dates without seconds', () => {
    const dateString = '2017-10-05T06:00Z'
    const date = new Date(dateString)
    var object = JSON.parse(
      JSON.stringify({ ...objectSnakeCase, date: dateString }),
      reviver
    )
    expect(object.date).toEqual(date)
  })

  test.each`
    description                        | dateString      | expected
    ${'parses without time component'} | ${'2017-10-05'} | ${new Date(2017, 9, 5)}
    ${'handles start of year'}         | ${'2019-01-01'} | ${new Date(2019, 0, 1)}
    ${'handles end of year'}           | ${'2018-12-31'} | ${new Date(2018, 11, 31)}
    ${'handles leap year'}             | ${'2020-02-29'} | ${new Date(2020, 1, 29)}
  `(
    '$description',
    ({ dateString, expected }: { dateString: string; expected: Date }) => {
      const actual = JSON.parse(JSON.stringify(dateString), reviver)
      expect(actual.getFullYear()).toEqual(expected.getFullYear())
      expect(actual.getMonth()).toEqual(expected.getMonth())
      expect(actual.getDate()).toEqual(expected.getDate())
    }
  )
})
