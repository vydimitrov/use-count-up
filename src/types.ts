import { Options, ElapsedTimeReturnValue } from 'use-elapsed-time'

export type OnComplete = Options['onComplete']
export type AutoResetKey = Options['autoResetKey']
export type Reset = ElapsedTimeReturnValue['reset']

export type ReturnValue = number | string | React.ReactNode
export type Formatter = (value: number) => ReturnValue
export type ToLocaleStringLocales = string | string[]
export type ToLocaleStringOptions = {
  localeMatcher?: string
  style?: string
  numberingSystem?: string
  unit?: string
  unitDisplay?: string
  currency?: string
  currencyDisplay?: string
  useGrouping?: boolean
  minimumIntegerDigits?: number
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  minimumSignificantDigits?: number
  maximumSignificantDigits?: number
  notation?: string
}
export type ToLocaleStringParams = {
  locale?: ToLocaleStringLocales
  options?: ToLocaleStringOptions
}

export type EasingFn = (
  currentTime: number,
  startValue: number,
  changeInValue: number,
  duration: number
) => number
export type Easing = 'easeOutCubic' | 'easeInCubic' | 'linear' | EasingFn

export type CountUpReturnProps = {
  /** Current value of the count up animation */
  value: ReturnValue
  /** Method to start over the animation*/
  reset: Reset
}

export type CountUpProps = {
  /** Play and pause counting animation. Default: false */
  isCounting?: boolean
  /** Initial value. Default: 0 */
  start?: number
  /** Target value */
  end?: number
  /** Animation duration in seconds. Default to 2 if end is set*/
  duration?: number
  /** Number of decimal places after the decimal separator. Default: 0 */
  decimalPlaces?: number
  /** Decimal separator character. Default: "." */
  decimalSeparator?: string
  /** Thousands separator character. Default: "" */
  thousandsSeparator?: string
  /** Static text before the value. Default: "" */
  prefix?: string
  /** Static text after the value. Default: "" */
  suffix?: string
  /** Indicates if toLocaleString should be used. Default: false */
  shouldUseToLocaleString?: boolean
  /** Set the toLocaleString locale and options*/
  toLocaleStringParams?: ToLocaleStringParams
  /** Static text before the value to be used in case toLocaleString params are not supported. Default: "" */
  fallbackPrefix?: string
  /** Static text after the value to be used in case toLocaleString params are not supported. Default: "" */
  fallbackSuffix?: string
  /** On animation complete event handler */
  onComplete?: OnComplete
  /**  Easing function to control how the animation is progressing. Default: easeOutExpo */
  easing?: Easing
  /** Function that formats the output value */
  formatter?: Formatter
  /** Render function to render the count up value. Used by the component */
  children?: (props: CountUpReturnProps) => ReturnValue
  /** Auto reset animation when the key changes. It works similar to React's key prop */
  autoResetKey?: AutoResetKey
}
