import { Config } from 'use-elapsed-time'

export type ReturnValue = number | string | React.ReactNode
export type OnComplete = Config['onComplete']
export type Formatter = (value: number) => ReturnValue

export type CountUpProps = {
  /** Play and pause counting animation. Default: false */
  isCounting?: boolean
  /** Initial value. Default: 0 */
  start?: number
  /** Target value */
  end?: number
  /** Animation duration in seconds */
  duration?: number
  /** On animation complete event handler */
  onComplete?: OnComplete
  /**  Easing function to control how the animation is progressing */
  easing?: (
    currentTime: number,
    startValue: number,
    changeInValue: number,
    duration: number
  ) => number
  /** A function that formats the output value */
  formatter?: Formatter
}
