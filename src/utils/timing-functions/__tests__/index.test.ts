import { ease, easeIn, easeInOut, easeOut, spring, interpolate } from '../index'
import cubicBezier from 'bezier-easing'

describe('named timing functions', () => {
  it('includes reexported cubicBezier', () => {
    expect(typeof cubicBezier).toBe('function')
    expect(typeof cubicBezier(0, 0, 1, 1)).toBe('function')
  })

  describe('ease', () => {
    it('starts at 0', () => {
      expect(ease(0)).toBeCloseTo(0)
    })

    it('ends at 1', () => {
      expect(ease(1)).toBeCloseTo(1)
    })
  })

  describe('easeIn', () => {
    it('starts at 0', () => {
      expect(easeIn(0)).toBeCloseTo(0)
    })

    it('ends at 1', () => {
      expect(easeIn(1)).toBeCloseTo(1)
    })
  })

  describe('easeInOut', () => {
    it('starts at 0', () => {
      expect(easeInOut(0)).toBeCloseTo(0)
    })

    it('ends at 1', () => {
      expect(easeInOut(1)).toBeCloseTo(1)
    })
  })

  describe('easeOut', () => {
    it('starts at 0', () => {
      expect(easeOut(0)).toBeCloseTo(0)
    })

    it('ends at 1', () => {
      expect(easeOut(1)).toBeCloseTo(1)
    })
  })

  describe('spring', () => {
    it('starts at 0', () => {
      expect(spring(0)).toBeCloseTo(0)
    })

    it('bounces beyond 1', () => {
      expect(spring(0.5)).toBeGreaterThan(1)
    })

    it('ends at 1', () => {
      expect(spring(1)).toBeCloseTo(1)
    })
  })

  describe('interpolate', () => {
    it('does linear interpolation', () => {
      expect(interpolate(0, 0, 1)).toBe(0)
      expect(interpolate(0.25, 0, 1)).toBe(0.25)
      expect(interpolate(0.5, 0, 1)).toBe(0.5)
      expect(interpolate(0.75, 0, 1)).toBe(0.75)
      expect(interpolate(1, 0, 1)).toBe(1)
    })
  })
})
