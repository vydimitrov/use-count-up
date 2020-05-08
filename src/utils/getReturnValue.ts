import { Formatter } from '../types'

type ValueOpt = {
  formatter?: Formatter
  decimalPlaces: number
  decimalSeparator: string
  thousandsSeparator: string
  prefix: string
  suffix: string
}

const addThousandsSeparator = (value: string, separator: string) =>
  value.replace(/\B(?=(\d{3})+(?!\d))/g, separator)

export const getReturnValue = (
  rawValue: number,
  {
    formatter,
    decimalPlaces,
    decimalSeparator,
    thousandsSeparator,
    prefix,
    suffix,
  }: ValueOpt
) => {
  let value

  if (typeof formatter === 'function') {
    value = formatter(rawValue)
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
