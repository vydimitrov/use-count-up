import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { CountUp } from '.'
import type { Props } from './types'

interface RenderProps extends Partial<Props> {
  children?: React.ReactNode
}

describe('CountUp', () => {
  const children = jest.fn(({ value }) => value)
  const fixture = {
    isCounting: true,
    duration: 0.74,
    end: 3684,
    children,
  }

  const getSomeAnimatedValue = async () => {
    await waitFor(() => expect(children.mock.calls.length).toBeGreaterThan(2))
    return children.mock.calls[1][0].value
  }

  const renderComponent = (props: Partial<RenderProps>) =>
    render(<CountUp {...fixture} {...props} />)

  afterEach(() => {
    children.mockClear()
  })

  it('renders the value if children is not set as a function', () => {
    renderComponent({ start: 24, children: undefined })

    expect(screen.getByText('24')).toBeVisible()
  })

  it('returns the start value even when isCounting is not set', () => {
    renderComponent({ start: 24, isCounting: undefined })

    expect(screen.getByText('24')).toBeVisible()
  })

  it('returns the end value if duration is set to 0', () => {
    renderComponent({ duration: 0 })

    expect(screen.getByText('3684')).toBeVisible()
  })

  it('uses the default duration if it is not provided', async () => {
    renderComponent({ duration: undefined })

    expect(
      await screen.findByText('3684', undefined, { timeout: 2000 })
    ).toBeVisible()
  })

  it('returns the elapsed time from the start if end value is not provided', () => {
    renderComponent({ end: undefined, start: 43.67 })

    expect(screen.getByText('43.67')).toBeVisible()
  })

  it('passes the current count up value and reset method to children render function', () => {
    renderComponent({ start: 3616 })

    const args = children.mock.calls[0][0]
    expect(args.value).toBe('3616')
    expect(args.reset).toEqual(expect.any(Function))
  })

  it('uses the custom easing function when it is provided', () => {
    const easingReturnValue = '45687'
    const easing = jest.fn().mockReturnValue(easingReturnValue)

    renderComponent({ easing })

    expect(screen.getByText(easingReturnValue)).toBeVisible()
    expect(easing).toHaveBeenCalledWith(0, 0, 3684, 0.74)
  })

  it.each`
    easing
    ${'easeOutCubic'}
    ${'easeInCubic'}
    ${'linear'}
  `(
    'returns the correct start and end values when the easing is set to $easing',
    async ({ easing }) => {
      renderComponent({ easing, start: 46 })

      expect(screen.getByText('46')).toBeVisible()
      expect(await screen.findByText('3684')).toBeVisible()
    }
  )

  it('uses custom formatter when provided', async () => {
    renderComponent({ start: 1236, formatter: (value) => `$${value} left` })

    expect(screen.getByText('$1236 left')).toBeVisible()
  })

  it('removes all decimal places by default while animating if start value is an integer', async () => {
    renderComponent({ start: 457 })

    const value = await getSomeAnimatedValue()
    expect(parseFloat(value) % 1).toBe(0)
  })

  it('adds dot as a decimal separator by default', async () => {
    renderComponent({ decimalPlaces: 2 })

    const value = await getSomeAnimatedValue()
    const [, decimal] = value.split('.')
    expect(decimal.length).toBe(2)
  })

  it('adds as many decimal places as the bigger decimal places count from start and end when decimalPlaces is not set and end has more decimal places', async () => {
    renderComponent({ start: 12.478, end: 18.93412 })

    const value = await getSomeAnimatedValue()
    const [, decimal] = value.split('.')
    expect(decimal.length).toBe(5)
  })

  it('adds as many decimal places as the bigger decimal places count from start and end when decimalPlaces is not set and start has more decimal places', async () => {
    renderComponent({ start: 12.478, end: 18.9 })

    const value = await getSomeAnimatedValue()
    const [, decimal] = value.split('.')
    expect(decimal.length).toBe(3)
  })

  it('uses decimal and thousand separators if there are provided', async () => {
    renderComponent({
      decimalPlaces: 2,
      decimalSeparator: ',',
      thousandsSeparator: ' ',
      start: 1152,
    })

    const value = await getSomeAnimatedValue()
    const [int, decimal] = value.split(',')
    const [thousands, hundreds] = int.split(' ')

    expect(thousands.length).toBe(1)
    expect(hundreds.length).toBe(3)
    expect(decimal.length).toBe(2)
  })

  it('adds prefix when provided', () => {
    renderComponent({ prefix: '£', start: 3562 })

    expect(screen.getByText('£3562')).toBeVisible()
  })

  it('adds suffix when provided', () => {
    renderComponent({ suffix: ' left', start: 3562 })

    expect(screen.getByText('3562 left')).toBeVisible()
  })

  it('fires updates per the updateInterval value', async () => {
    const onUpdate = jest.fn()
    renderComponent({
      start: 5,
      easing: 'linear',
      duration: undefined,
      end: undefined,
      updateInterval: 1,
      onUpdate,
    })

    expect(screen.getByText('5')).toBeVisible()
    await waitFor(() => expect(onUpdate).toHaveBeenCalledWith('5'))
    await waitFor(() => expect(onUpdate).toHaveBeenLastCalledWith('6'), {
      timeout: 1500,
    })
    expect(screen.getByText('6')).toBeVisible()
  })
})
