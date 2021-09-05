import { useCountUp } from '.'
import type { Props } from './types'

export const CountUp: React.FC<Props> = ({ children, ...props }) => {
  const countUpProps = useCountUp(props)

  return typeof children === 'function'
    ? children(countUpProps)
    : countUpProps.value
}

CountUp.displayName = 'CountUp'
