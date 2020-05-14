import { renderHook } from '@testing-library/react-hooks'

import { useCountUp } from '../src'

const useElapsedTime = require('use-elapsed-time')

const fixture = {
  isCounting: false,
  duration: 10,
  end: 3684,
}

describe('useCountUp return value', () => {
  const reset = jest.fn()
  beforeEach(() => {
    useElapsedTime.__setElapsedTime(17.345)
    useElapsedTime.__setResetMethod(reset)
  })
  afterEach(() => {
    useElapsedTime.__resetResetMethod()
  })

  it('should return an object with current count up value and reset method', () => {
    const { result } = renderHook(() => useCountUp(fixture))

    expect(result.current).toEqual({ value: '3683', reset })
  })
})
