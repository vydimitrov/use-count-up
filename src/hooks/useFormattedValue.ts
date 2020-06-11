import { useMemo } from 'react'
import { CountUpProps } from '../types'
import { getToLocaleStringParamsSupport, DEFAULT_START } from '../utils'

const addThousandsSeparator = (value: string, separator: string) =>
  value.replace(/\B(?=(\d{3})+(?!\d))/g, separator)

const addPrefixSuffix = (prefix: string, value: string, suffix: string) =>
  `${prefix}${value}${suffix}`

const getDecimalPartLength = (num: number) =>
  (num.toString().split('.')[1] || '').length

const getDefaultDecimalPlaces = (start: number, end?: number) => {
  const startDecimals = getDecimalPartLength(start)
  const endDecimals = getDecimalPartLength(end || 1)

  return startDecimals >= endDecimals ? startDecimals : endDecimals
}

const getNumForLocaleString = (number: number, decimalPlaces: number) => {
  if (decimalPlaces === 0) {
    return Math.round(number)
  }

  return parseFloat(number.toFixed(decimalPlaces))
}

export const useFormattedValue = (
  rawValue: number,
  {
    start = DEFAULT_START,
    end,
    decimalPlaces = getDefaultDecimalPlaces(start, end),
    formatter,
    decimalSeparator = '.',
    thousandsSeparator = '',
    prefix = '',
    suffix = '',
    shouldUseToLocaleString = false,
    toLocaleStringParams,
    fallbackPrefix = '',
    fallbackSuffix = '',
  }: CountUpProps
) => {
  const canUseLocaleParams = useMemo(() => getToLocaleStringParamsSupport(), [])
  const getBaseValueFormatting = () => {
    if (decimalPlaces === 0) {
      const valueStr = Math.round(rawValue).toString()
      return addThousandsSeparator(valueStr, thousandsSeparator)
    }

    const [int, decimals] = rawValue.toFixed(decimalPlaces).split('.')
    const intFormatted = addThousandsSeparator(int, thousandsSeparator)
    return `${intFormatted}${decimalSeparator}${decimals}`
  }

  // custom formatter has the highest priority
  if (typeof formatter === 'function') {
    return formatter(rawValue)
  }

  // second highest priority goes to toLocaleString
  if (shouldUseToLocaleString) {
    const valueWithDecimals = getNumForLocaleString(rawValue, decimalPlaces)
    // to toLocaleString has better support without params
    if (typeof toLocaleStringParams === 'undefined') {
      const value = valueWithDecimals.toLocaleString()
      return addPrefixSuffix(prefix, value, suffix)
    }

    // use it with params if supported
    if (canUseLocaleParams) {
      // gard against incorrect locale
      try {
        const { locale, options } = toLocaleStringParams
        const value = valueWithDecimals.toLocaleString(locale, options)

        return addPrefixSuffix(prefix, value, suffix)
      } catch (e) {
        console.error(e.message)
      }
    }

    // params are not supported - use manual formatting with fallback prefix and suffix
    const value = getBaseValueFormatting()
    return addPrefixSuffix(fallbackPrefix, value, fallbackSuffix)
  }

  // manual number formatting has the lowest priority
  const value = getBaseValueFormatting()
  return addPrefixSuffix(prefix, value, suffix)
}
