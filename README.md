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
