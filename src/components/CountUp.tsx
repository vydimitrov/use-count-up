import React from 'react'
import { CountUpProps } from '../types'
import { useCountUp } from '../hooks'

export const CountUp = (props: CountUpProps) => {
  const { value } = useCountUp(props)

  return <>{value}</>
}

CountUp.displayName = 'CountUp'
