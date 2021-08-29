import type { Easing } from './types'

export const easings = {
  easeInCubic: (t: number, b: number, c: number, d: number): number => {
    t /= d
    return c * t * t * t + b
  },
  easeOutCubic: (t: number, b: number, c: number, d: number): number => {
    t /= d
    t--
    return c * (t * t * t + 1) + b
  },
  linear: (t: number, b: number, c: number, d: number): number => {
    return (c * t) / d + b
  },
}

export const defaultEasing = easings.easeOutCubic

export const getEasing = (easing: Easing) =>
  typeof easing === 'function' ? easing : easings[easing]
