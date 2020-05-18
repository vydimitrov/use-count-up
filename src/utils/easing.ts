import { Easing } from '../types'

const easeOutCubic = (t: number, b: number, c: number, d: number): number => {
  t /= d
  t--
  return c * (t * t * t + 1) + b
}

const easeInCubic = (t: number, b: number, c: number, d: number): number => {
  t /= d
  return c * t * t * t + b
}

const linear = (t: number, b: number, c: number, d: number): number => {
  return (c * t) / d + b
}

export const easings = {
  easeInCubic,
  easeOutCubic,
  linear,
}

export const defaultEasing = easings.easeOutCubic

export const getEasing = (easing: Easing) =>
  typeof easing === 'function' ? easing : easings[easing]
