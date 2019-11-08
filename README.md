# useCountUp React hook
Only 2KB React hook to animate counting to a number, infinite or even beyond.

## Installation
```
yarn add use-count-up
```
or
```
npm install use-count-up
```

## Basic usage
```jsx
import { useCountUp } from 'use-count-up';

const isCounting = true;
const config = {
  start: 450,
  end: 1320,
  duration: 3.2,
  formatter: value => `${Math.ceil(value)}$`
};

const MyComponent = () => { 
  const value = useCountUp(isCounting, config);
  return value;
};
```

## Function signature
```js
  const useCountUp = (
    isCounting: boolean,
    config?: {
      start?: number,
      end?: number,
      duration?: number,
      onComplete?: () => void,
      easing: (t, b, c, d) => void,
      formatter?: (value: number) => number|string|node,
    }
  ): number|string|node;
```

