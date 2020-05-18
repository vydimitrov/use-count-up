import React from 'react'
import PropTypes from 'prop-types'
import { CountUpProps } from '../types'
import { useCountUp } from '../hooks'

const CountUp = (props: CountUpProps) => {
  const { children } = props
  const countUpProps = useCountUp(props)

  return (
    <>
      {typeof children === 'function'
        ? children(countUpProps)
        : countUpProps.value}
    </>
  )
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
  shouldUseToLocaleString: PropTypes.bool,
  toLocaleStringParams: PropTypes.shape({
    locale: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    options: PropTypes.object,
  }),
  fallbackPrefix: PropTypes.string,
  fallbackSuffix: PropTypes.string,
  autoResetKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  easing: PropTypes.oneOfType([PropTypes.string, PropTypes.func]), // type checking can be improved here
  onComplete: PropTypes.func,
  formatter: PropTypes.func,
  children: PropTypes.func,
}

export { CountUp }
