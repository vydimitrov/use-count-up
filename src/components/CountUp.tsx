import React from 'react'
import { CountUpProps } from '../types'
import { useCountUp } from '../hooks'

export const CountUp = (props: CountUpProps) => {
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
