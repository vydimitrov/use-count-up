# useElapsedTime Rook hook
The only hook you need to perform JavaScript animations in React.

* Lightweight only 1KB
* Build with 0 dependencies
* Toggle pay/pause
* Combine with [any easing function](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js) to get the right animation

## Installation
```
yarn add use-elapsed-time
```
or
```
npm install use-elapsed-time
```

## Basic usage
```
import { useElapsedTime } from 'use-elapsed-time';

const MyComponent = () => {
  const isPlaying = true;
  const elapsedTime = useElapsedTime(isPlaying);
  
  return elapsedTime;
};
```

## Function signature
```
  const useElapsedTime = (
    isPlaying: boolean,
    `config`?: {
      durationMilliseconds: number,
      onComplete?: () => void,
      isRepeated?: boolean
    }
  ): number;
```

The first arguments `isPlaying` indicates if the loop to get the elapsed time is running or it is paused.
The second argument `congif` is optional and it makes sense when the animation duration (`durationMilliseconds`) is defined. `onComplete` callback will be fired when the duration is reached. If `isRepeated` is set the elapsed time loop will start over once the duration is reached.
The hook returns elapsed time in milliseconds.  

## Use cases
### Countdown timer
```
import { useElapsedTime } from 'use-elapsed-time';

const CountDownTimerComponent = () => {
  const isPlaying = true;
  const durationMilliseconds = 5000;
  const config = { durationMilliseconds };
  
  const elapsedTime = useElapsedTime(isPlaying, config);
  const remainingTime = Math.ceil((durationMilliseconds - elapsedTime) / 1000);
  
  return <div>Remaining {remainingTime} seconds</div>;
};
```

### Count Up
```
import { useElapsedTime } from 'use-elapsed-time';

const easing = function (t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
};

const isPlaying = true;
const start = 90;
const end = 300;
const durationMilliseconds = 3000;
const config = { durationMilliseconds };

const CountUpComponent = () => {
    const elapsedTime = useElapsedTime(isPlaying, config);
    const currentValue = easing(elapsedTime, start, end - start, durationMilliseconds);

    return <div>{Math.round(currentValue)}</div>;
};
```