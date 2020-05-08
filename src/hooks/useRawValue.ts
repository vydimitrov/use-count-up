import { useElapsedTime } from 'use-elapsed-time'
import { CountUpProps } from '../types'
import { defaultEasing } from '../utils'

export const useRawValue = ({
  isCounting = false,
  start = 0,
  end,
  duration,
  easing = defaultEasing,
  onComplete,
}: CountUpProps) => {
  const durationMilliseconds =
    typeof duration === 'number' ? duration * 1000 : undefined
  const elapsedTime = useElapsedTime(isCounting, {
    durationMilliseconds,
    onComplete,
  })

  if (durationMilliseconds === 0 && typeof end === 'number') {
    return end
  }

  if (
    typeof end === 'number' &&
    typeof durationMilliseconds === 'number' &&
    typeof easing === 'function'
  ) {
    return easing(elapsedTime, start, end - start, durationMilliseconds)
  }

  return elapsedTime
}
