# useCountUp React hook
Only 4.6kB min / 1.5kB min+gzip React hook to animate counting up or down to a number, infinity, or even beyond.

Display your data in an attractive way to make sure the important numbers are highlighted in an eye-catching format.

Unlike other similar solutions, this hook allows you to count up/down with or without providing end values.

The library comes with built-in and ready-to-use TypeScript type definitions.


<img src="https://user-images.githubusercontent.com/10707142/68539807-2f77ba80-0389-11ea-978c-8955e9b8db9f.gif" width="700">

## Installation
```
yarn add use-count-up
```
or
```
npm install use-count-up
```

## Demo
Check the demo on CodeSandbox to get started  

[![Edit aged-monad-0mrfu](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/aged-monad-0mrfu?fontsize=14)

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
  function useCountUp(
    isCounting: boolean,
    config?: {
      start?: number,
      end?: number,
      duration?: number,
      onComplete?: () => undefined | [shouldRepeat: boolean, delay: number],
      easing?: (t: number, b: number, c: number, d: number) => number,
      formatter?: (value: number) => number | string | node,
    }
  ) => number | string | node;
```
### 1st agrument `isCounting: boolean`
> Default: `isCounting = false`

Toggle the counting animation. It can be used to start the animation when the elmenet enters the viewport. If `config.end`  is not provided, the animation will continue to `Infinity`.

### 2nd argument `config: object`
> Default:  `config = {}`

Optional configuration object with the following properties and methods:

#### `start: number`  
> Default:  `start = 0`

Initial value.

#### `end: number`  
> Default:  `end = undefined`

Target value.

#### `duration: number`  
> Default:  `duration = undefined`

Animation duration in seconds. Example: `3`, `4.2`, `0.5`

#### `onComplete: () => undefined | [shouldRepeat: boolean, delay: number]`  
> Default:  `onComplete = undefined`

On animation complete event handler. It can be used to restart the animation by returning an array where the first element `shouldRepeat` indicates if the loop should start over and second element `delay` specifies the delay before looping again in milliseconds.

#### `easing: (t: number, b: number, c: number, d: number) => number,`  
> Default:  `easing = (t, b, c, d) => { t /= d; t--; return c*(t*t*t*t*t + 1) + b; }`  // easeOutQuint

`t` - current time  
`b` - start value  
`c` - change in value  
`d` - duration  
Easing function to control how the animation is progressing. [There are a bunch of functions](http://www.gizma.com/easing/) that can be used to change that behaviour.

#### `formatter: (value: number) => number | string | node`  
> Default:  `formatter = value => Math.round(value)`

A function that formats the output value. It can be used to add prefix or suffix to the value. A good formatting option is to use [`toLocaleString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString), which will give the correct decimal and thousand separators.
