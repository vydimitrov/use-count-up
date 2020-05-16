<div align="center">
  <h1>use-count-up</h1>
  <a href="https://www.npmjs.com/package/use-count-up">
    <img alt="NPM version" src="https://img.shields.io/npm/v/use-count-up" />
  </a>
   <a href="https://codecov.io/gh/vydimitrov/use-count-up">
    <img alt="Build Status" src="https://img.shields.io/github/workflow/status/vydimitrov/use-count-up/Codecov%20Coverage" />
  </a>
  <a href="https://codecov.io/gh/vydimitrov/use-count-up">
    <img alt="Code Coverage" src="https://img.shields.io/codecov/c/gh/vydimitrov/use-count-up" />
  </a>
  <a href="https://bundlephobia.com/result?p=use-count-up">
    <img alt="Bundle Size" src="https://img.shields.io/bundlephobia/min/use-count-up" />
  </a>

  <p>
    <br />
    React/React Native component and hook to animate counting up or down to a number or infinity
  </p>
</div>

<hr />

- Lightweight implementation comparing to [similar solutions](https://bundlephobia.com/scan-results?packages=use-count-up,react-countup)
- Support `toLocaleString` with fallback options
- Declarative API _(no more imperative calls to `start()` and `update()`)_
- Built with TypeScript

## Installation

```
yarn add use-count-up
```

## Demo

Check the demo on CodeSandbox to get started

[![Edit aged-monad-0mrfu](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/aged-monad-0mrfu?fontsize=14)

## Component basic usage

```jsx
import { CountUp } from 'use-count-up'

const MyComponent = () => <CountUp isCounting end={1320} duration={3.2} />
```

The `CountUp` component should be wrapped in `Text` component when used in React Native project, like so

```jsx
import { Text } from 'react-native'
import { CountUp } from 'use-count-up'

const MyComponent = () => (
  <Text>
    <CountUp isCounting end={1320} duration={3.2} />
  </Text>
)
```

## Hook basic usage

The hook accepts the same properties as the component. The usage for React and React Native is the same.

```jsx
import { useCountUp } from 'use-count-up'

const MyComponent = () => {
  const { value } = useCountUp({
    isCounting: true,
    end: 1320,
    duration: 3.2,
  })

  return value
}
```

## Props

| Prop Name               | Type                                                                                 | Default      | Description                                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isCounting              | boolean                                                                              | false        | Play and pause counting animation                                                                                                                                                                                                  |
| start                   | number                                                                               | 0            | Initial value                                                                                                                                                                                                                      |
| end                     | number                                                                               | -            | Target value                                                                                                                                                                                                                       |
| duration                | number                                                                               | -            | Animation duration in seconds. Defaults to 2 seconds if `end` is set. If `end` isn't set the animation will continue to Infinity.                                                                                                  |
| decimalPlaces           | number                                                                               | 0            | Number of decimal places after the decimal separator                                                                                                                                                                               |
| decimalSeparator        | string                                                                               | .            | Decimal separator character                                                                                                                                                                                                        |
| thousandsSeparator      | string                                                                               | -            | Thousands separator character                                                                                                                                                                                                      |
| prefix                  | string                                                                               | -            | Static text before the value                                                                                                                                                                                                       |
| suffix                  | string                                                                               | -            | Static text after the value                                                                                                                                                                                                        |
| shouldUseToLocaleString | boolean                                                                              | false        | Indicates if `toLocaleString` should be used                                                                                                                                                                                       |
| toLocaleStringLocale    | string \| string[]                                                                   | -            | Set the `toLocaleString` locale. [Check all locales here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)                                                         |
| toLocaleStringOptions   | object                                                                               | -            | Set the `toLocaleString` options. [Check all options here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)                                                        |
| fallbackPrefix          | string                                                                               | -            | Static text before the value to be used in case toLocaleString params are not supported                                                                                                                                            |
| fallbackSuffix          | string                                                                               | -            | Static text after the value to be used in case toLocaleString params are not supported                                                                                                                                             |
| onComplete              | (): void \| {shouldRepeat: boolean, delay: number}                                   | -            | On complete handler. It can be used to repeat the animation by returning an object with following props: `shouldRepeat` indicates if the animation should start over; `delay` specifies the delay before looping again in seconds. |
| easing                  | easeOutCubic \| easeInCubic \| linear \| [easing func](http://www.gizma.com/easing/) | easeOutCubic | Easing function to control the animation progress                                                                                                                                                                                  |
| formatter               | (value: number): number \| string \| node                                            | -            | Function that formats the output value. It has the heights priority so all other formating options are ignored                                                                                                                     |
| children                | ({ value: number, reset: number }): number \| string \| node                         | -            | Render function to render the count up value. Used only by the component                                                                                                                                                           |
| autoResetKey            | number \| string                                                                     | -            | Auto reset animation when the key changes. Works similar to React `key` prop                                                                                                                                                       |

## Return values

The hook returns the current count up value and reset method to reset the animation.

```jsx
import { useCountUp } from 'use-count-up'

const { value, reset } = useCountUp({ isCounting: true })
```

The component's children render function will receive as props the current count up value and reset method to reset the animation.

```jsx
import { CountUp } from 'use-count-up'

const MyComponent = () => (
  <CountUp isCounting>{({ value, reset }) => value}</CountUp>
)
```
