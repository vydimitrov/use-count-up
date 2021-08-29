import PropTypes from 'prop-types'
import { useCountUp } from '.'
import type { CountUpProps } from './types'

export const CountUp: React.FC<CountUpProps> = ({ children, ...props }) => {
  const countUpProps = useCountUp(props)

  return typeof children === 'function'
    ? children(countUpProps)
    : countUpProps.value
}

CountUp.displayName = 'CountUp'

CountUp.propTypes = {
  isCounting: PropTypes.bool,
  start: PropTypes.number,
  end: PropTypes.number,
  duration: PropTypes.number,
  decimalPlaces: PropTypes.number,
  decimalSeparator: PropTypes.string,
  thousandsSeparator: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  onComplete: PropTypes.func,
  // @ts-ignore Type checking can be improved here
  easing: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  formatter: PropTypes.func,
  children: PropTypes.func,
}
