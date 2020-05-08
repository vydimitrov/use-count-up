import { useMemo } from 'react'
import { CountUpProps } from '../types'
import {
  toLocaleStringSupports,
  toLocaleStringSupportsLocales,
  toLocaleStringSupportsOptions,
} from '../utils'

const addThousandsSeparator = (value: string, separator: string) =>
  value.replace(/\B(?=(\d{3})+(?!\d))/g, separator)

export const useFormattedValue = (
  rawValue: number,
  {
    formatter,
    decimalPlaces = 0,
    decimalSeparator = '.',
    thousandsSeparator = ' ',
    prefix = '',
    suffix = '',
    shouldUseToLocaleString = false,
    toLocaleStringLocale,
    toLocaleStringOptions,
  }: CountUpProps
) => {
  const {
    useToLocaleStringWithoutParams,
    useToLocaleStringWithParams,
  } = useMemo(() => {
    const isSupported = toLocaleStringSupports()
    let useToLocaleStringWithParams = false
    let useToLocaleStringWithoutParams = false

    if (shouldUseToLocaleString && isSupported) {
      const hasParams =
        typeof toLocaleStringLocale !== 'undefined' ||
        typeof toLocaleStringOptions !== 'undefined'
      const areLocalesSupported = toLocaleStringSupportsLocales()
      const areOptionsSupported = toLocaleStringSupportsOptions()

      useToLocaleStringWithoutParams = !hasParams

      useToLocaleStringWithParams =
        hasParams && areLocalesSupported && areOptionsSupported
    }

    return {
      useToLocaleStringWithParams,
      useToLocaleStringWithoutParams,
    }
  }, [shouldUseToLocaleString, toLocaleStringLocale, toLocaleStringOptions])

  // custom formatter has the highest priority
  if (typeof formatter === 'function') {
    return formatter(rawValue)
  }

  let value

  // toLocalString has better support without params
  if (useToLocaleStringWithoutParams) {
    value = rawValue.toLocaleString()
  } else if (useToLocaleStringWithParams) {
    value = rawValue.toLocaleString(toLocaleStringLocale, toLocaleStringOptions)
  } else if (decimalPlaces === 0) {
    const valueStr = (rawValue | 0).toString()
    value = addThousandsSeparator(valueStr, thousandsSeparator)
  } else {
    const [int, decimals] = rawValue.toFixed(decimalPlaces).split('.')
    const intFormatted = addThousandsSeparator(int, thousandsSeparator)
    value = `${intFormatted}${decimalSeparator}${decimals}`
  }

  return `${prefix}${value}${suffix}`
}
