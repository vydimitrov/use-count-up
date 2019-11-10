# useCountUp React hook
Only 4.5KB React hook to animate counting to a number, infinite or even beyond.

<img src="https://user-images.githubusercontent.com/10707142/68539807-2f77ba80-0389-11ea-978c-8955e9b8db9f.gif" width="700">

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
The function takes two agruments and returns the value from the `formatter` method.
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
  ) => number|string|node;
```
### 1st agrument `isCounting: boolean`
> Default: `isCounting = false`

Toggle the counting animation. It can be used to start the animation when the elmenet enters the viewport. If `config.end`  is not provided the animation will continue to `Infinity`.

### 2nd argument `config: object`
> Default:  `config = {}`

Optional configuration object with the following properties:

#### `start: number`  
> Default:  `start = 0`

Initial value.

#### `end: number`  
> Default:  `end = undefined`

Target value.

#### `duration: number`  
> Default:  `duration = undefined`

Animation duration in seconds. Example: `3`, `4.2`, `0.5`

#### `onComplete: () => void`  
> Default:  `onComplete = undefined`

On animation complete event handler.

#### `easing: (t: number, b: number, c: number, d: number) => number,`  
> Default:  `easing = (t, b, c, d) => { t /= d; t--; return c*(t*t*t*t*t + 1) + b; }`  // easeOutQuint

`t` - current time  
`b` - start value  
`c` - change in value  
`d` - duration  
Easing function to control how the animation is progressing. [There are bunch of functions](http://www.gizma.com/easing/) that can be used to change that behaviour.

#### `formatter: (value: number) => number|string|node`  
> Default:  `formatter = value => Math.round(value)`

Function that formats the output value. It can be used to add prefix or suffix to the value. Good formatting option is to use [`toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString), which will give the correct decimal and thousand separators.
