# useCountUp React hook
Only 5KB React hook to animate counting to a number, infinite or even beyond.

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
      easing?: (t: number, b: number, c: number, d: number) => number,
      formatter?: (value: number) => number|string|node,
    }
  ): number|string|node;
```
The function takes two agruments: 
1. `isCounting` - boolean to toggle the counting animation
2. `config` - optional configuration object with the following properties:
  * `start` - Initial value
