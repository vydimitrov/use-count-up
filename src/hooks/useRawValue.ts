import { CountUpProps, Easing } from '../types'
import { easings } from '../utils'

const getEasingFun = (easing: Easing) => {
  if (typeof easing === 'function') {
    return easing
  }

  return easings[easing] || easings.easeOutExpo
}

export const useRawValue = (
  elapsedTime: number,
  { start = 0, end, duration, easing = easings.easeOutExpo }: CountUpProps
) => {
  let rawValue = elapsedTime
  const easingFn = getEasingFun(easing)

  if (duration === 0 && typeof end === 'number') {
    rawValue = end
  } else if (typeof end === 'number' && typeof duration === 'number') {
    rawValue = easingFn(elapsedTime, start, end - start, duration)
  }

  return rawValue
}
