import { useElapsedTime } from 'use-elapsed-time'
import { defaultEasing, getEasing } from './easing'
import type { CountUpProps, CountUpReturnProps } from './types'

const getDuration = (end?: number, duration?: number) => {
  if (typeof end !== 'number') {
    return undefined
  }

  return typeof duration === 'number' ? duration : 2
}

const addThousandsSeparator = (value: string, separator: string) =>
  value.replace(/\B(?=(\d{3})+(?!\d))/g, separator)

const getDecimalPartLength = (num: number) =>
  (num.toString().split('.')[1] || '').length

const getDefaultDecimalPlaces = (start: number, end?: number) => {
  const startDecimals = getDecimalPartLength(start)
  const endDecimals = getDecimalPartLength(end || 1)

  return startDecimals >= endDecimals ? startDecimals : endDecimals
}

export const useCountUp = ({
  isCounting = false,
  start = 0,
  end,
  duration,
  decimalPlaces = getDefaultDecimalPlaces(start, end),
  decimalSeparator = '.',
  thousandsSeparator = '',
  prefix = '',
  suffix = '',
  onComplete,
  easing = defaultEasing,
  formatter,
}: CountUpProps): CountUpReturnProps => {
  const durationValue = getDuration(end, duration)

  const { elapsedTime, reset } = useElapsedTime({
    isPlaying: isCounting,
    duration: durationValue,
    onComplete,
  })

  let rawValue

  if (durationValue === 0 && typeof end === 'number') {
    rawValue = end
  } else if (typeof end === 'number' && typeof durationValue === 'number') {
    const easingFn = getEasing(easing)
    // elapsedTime should always be less or equal to the durationValue
    const time = elapsedTime < durationValue ? elapsedTime : durationValue
    rawValue = easingFn(time, start, end - start, durationValue)
  } else {
    rawValue = start + elapsedTime
  }

  let formattedValue

  if (typeof formatter === 'function') {
    formattedValue = formatter(rawValue)
  } else {
    let tempValue
    if (decimalPlaces === 0) {
      const valueStr = Math.round(rawValue).toString()
      tempValue = addThousandsSeparator(valueStr, thousandsSeparator)
    } else {
      const [int, decimals] = rawValue.toFixed(decimalPlaces).split('.')
      const intFormatted = addThousandsSeparator(int, thousandsSeparator)
      tempValue = `${intFormatted}${decimalSeparator}${decimals}`
    }

    formattedValue = `${prefix}${tempValue}${suffix}`
  }

  return { value: formattedValue, reset }
}
