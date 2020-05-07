import { useElapsedTime } from 'use-elapsed-time'
import { CountUpProps, Formatter } from '../types'
import { defaultEasing } from '../utils'

const getReturnValue = (value: number, formatter?: Formatter) => ({
  value: typeof formatter === 'function' ? formatter(value) : value,
})

const useCountUp = ({
  isCounting = false,
  start = 0,
  end,
  duration,
  easing = defaultEasing,
  formatter,
  onComplete,
}: CountUpProps) => {
  const durationMilliseconds =
    typeof duration === 'number' ? duration * 1000 : undefined
  const elapsedTime = useElapsedTime(isCounting, {
    durationMilliseconds,
    onComplete,
  })

  if (
    typeof end === 'undefined' ||
    typeof durationMilliseconds === 'undefined' ||
    typeof easing !== 'function'
  ) {
    return getReturnValue(elapsedTime, formatter)
  }

  console.log(elapsedTime)

  const value = easing(elapsedTime, start, end - start, durationMilliseconds)
  return getReturnValue(value, formatter)
}

export { useCountUp }
