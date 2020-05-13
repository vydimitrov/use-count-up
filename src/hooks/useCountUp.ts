import { useElapsedTime } from 'use-elapsed-time'
import { CountUpProps, CountUpReturnProps } from '../types'
import { useRawValue, useFormattedValue } from '../hooks'

const useCountUp = (props: CountUpProps): CountUpReturnProps => {
  const { isCounting = false, duration, onComplete, autoResetKey } = props

  const { elapsedTime, reset } = useElapsedTime(isCounting, {
    duration,
    onComplete,
    autoResetKey,
  })

  const rawValue = useRawValue(elapsedTime, props)
  const value = useFormattedValue(rawValue, props)

  return { value, reset }
}

export { useCountUp }
