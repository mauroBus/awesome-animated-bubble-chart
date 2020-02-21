import cubicBezier from 'bezier-easing'

// https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#ease
export const ease = cubicBezier(0.25, 0.1, 0.25, 1)
export const easeIn = cubicBezier(0.42, 0, 1, 1)
export const easeInOut = cubicBezier(0.42, 0, 0.58, 1)
export const easeOut = cubicBezier(0, 0, 0.58, 1)

// Should exactly match --curve-spring from variables.css
export const spring = cubicBezier(0.5, 3, 0.5, 0.3)

// linear interpolation, for finding point along curve
export const interpolate = (t: number, from: number, to: number) =>
  from + (to - from) * t
