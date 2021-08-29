import {
  ReturnValue as ETReturnValue,
  Props as ETProps,
} from 'use-elapsed-time'

export type ReturnValue = number | string | React.ReactNode

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
  reset: ETReturnValue['reset']
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
  /** On animation complete event handler */
  onComplete?: ETProps['onComplete']
  /**  Easing function to control how the animation is progressing. Default: easeOutExpo */
  easing?: Easing
  /** Function that formats the output value */
  formatter?: (value: number) => ReturnValue
}
