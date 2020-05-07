import React from 'react'
import PropTypes from 'prop-types'

import { useCountUp } from '../'

const CountUp = (props) => {
  return useCountUp(props)
}

CountUp.propTypes = {
  isPlaying: PropTypes.bool,
  start: PropTypes.number,
  end: PropTypes.number,
  duration: PropTypes.number,
  easing: PropTypes.func,
  formatter: PropTypes.func,
  onComplete: PropTypes.func,
}

CountUp.displayName = 'CountUp'

export { CountUp }
