import * as React from 'react';

/** Optional configuration object */
export interface Config {
    /** Initial value */
    start?: number,
    /** Target value */
    end?: number,
    /** Animation duration in seconds */
    duration?: number,
    /** On animation complete event handler. It can be used to restart the animation by returning an array where the first element "shouldRepeat" indicates if the loop should start over and second element "delay" specifies the delay before looping again in milliseconds. */
    onComplete?: () => void | [boolean, number], // [shouldRepeat: boolean, delay: number]
    /** 
     * Easing function to control how the animation is progressing
     * t - current time
     * b - start value
     * c - change in value
     * d - duration
     */
    easing?: (t: number, b: number, c: number, d: number) => number,
    /** A function that formats the output value */
    formatter?: (value: number) => React.ReactNode
}

export function useCountUp(
    isCounting: boolean,
    config?: Config
): React.ReactNode;