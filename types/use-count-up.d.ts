import * as React from 'react'
import * as useElapsedTime from 'use-elapsed-time'

export type OnComplete = Config['onComplete']
type ReturnValue = number | string | React.ReactNode

/** Optional configuration object */
export interface Config {
  /** Play and pause animation. Default: false */
  isCounting: boolean
  /** Initial value */
  start?: number
  /** Target value */
  end?: number
  /** Animation duration in seconds */
  duration?: number
  /** On animation complete event handler. */
  onComplete?: OnComplete
  /**  Easing function to control how the animation is progressing */
  easing?: (
    currentTime: number,
    startValue: number,
    changeInValue: number,
    duration: number
  ) => number
  /** A function that formats the output value */
  formatter?: (value: number) => ReturnValue
}

export function useCountUp(config: Config): ReturnValue
