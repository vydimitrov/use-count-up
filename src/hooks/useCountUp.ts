import { CountUpProps } from '../types'
import { useRawValue, useFormattedValue } from '../hooks'

const useCountUp = (props: CountUpProps) => {
  const rawValue = useRawValue(props)
  const value = useFormattedValue(rawValue, props)

  return { value }
}

export { useCountUp }
