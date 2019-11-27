import * as React from 'react';
import * as useElapsedTime from 'use-elapsed-time';

type ReturnValue = number | string | React.ReactNode;

/** Optional configuration object */
export interface Config {
    /** Initial value */
    start?: number,
    /** Target value */
    end?: number,
    /** Animation duration in seconds */
    duration?: number,
     /** On animation complete event handler. */
    onComplete?: useElapsedTime.Config.onComplete,
    /**  Easing function to control how the animation is progressing */
    easing?: (
        currentTime: number,
        startValue: number,
        changeInValue: number,
        duration: number
    ) => number,
    /** A function that formats the output value */
    formatter?: (value: number) => ReturnValue
}

export function useCountUp(
    isCounting: boolean,
    config?: Config
): ReturnValue;