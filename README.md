# useElapsedTime React hook
The only hook you need to perform JavaScript animations in React.

* Lightweight: only 2KB
* Built with 0 dependencies
* Toggle play/pause
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
```jsx
import { useElapsedTime } from 'use-elapsed-time';

const MyComponent = () => {
  const isPlaying = true;
  const elapsedTime = useElapsedTime(isPlaying);
  
  return elapsedTime;
};
```
[Basic usage demo](https://codesandbox.io/s/epic-dream-hn62k)

## Function signature
```js
  const useElapsedTime = (
    isPlaying: boolean,
    config?: {
      durationMilliseconds: number,
      onComplete?: () => void,
      isRepeated?: boolean
    }
  ): number;
```

The first argument `isPlaying` indicates if the loop to get the elapsed time is running or it is paused.
The second argument `config` is optional and it makes sense when the animation duration `durationMilliseconds` is defined. `onComplete` callback will be fired when the duration is reached. If `isRepeated` is set, the elapsed time loop will start over once the duration is reached.
The hook returns elapsed time in milliseconds.  

## Use cases
### Countdown timer
```jsx
import { useElapsedTime } from 'use-elapsed-time';

const isPlaying = true;
const durationMilliseconds = 5000;
const config = { durationMilliseconds };

const CountDownTimerComponent = () => {  
  const elapsedTime = useElapsedTime(isPlaying, config);
  const remainingTime = Math.ceil((durationMilliseconds - elapsedTime) / 1000);
  
  return <div>Remaining {remainingTime} seconds</div>;
};
```
[Countdown timer demo](https://codesandbox.io/s/priceless-hill-2tbiq)

### Count Up
```jsx
import { useElapsedTime } from 'use-elapsed-time';

const easing = (t, b, c, d) => {
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
[Count up demo](https://codesandbox.io/s/hungry-cray-hl6wn)

### Non-liner path animation
```jsx
import { useElapsedTime } from 'use-elapsed-time';

const easing = (t, b, c, d) => {
    return c*((t=t/d-1)*t*t + 1) + b;
};

// define the path by an array of cordinates [x, y] 
const points = [[150,200],[151,201], ...];
const pointsLength = 530 - 1;
const isPlaying = true;
const durationMilliseconds = 4000;
const config = { durationMilliseconds, isRepeated: true };

const BounceAnimation = () => {
    const elapsedTime = useElapsedTime(isPlaying, config);
    const currentPoint = easing(elapsedTime, 0, pointsLength, durationMilliseconds);
    const colorValue = easing(elapsedTime, 0, 255, durationMilliseconds);
  
    const pointStyle = {
        position: 'absolute',
        left: points[currentPoint][0],
        top: points[currentPoint][1],
        width: 20,
        height: 20,
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        background: `rgba(${colorValue}, 0, ${255 - colorValue})`
    };

    return (
        <div style={{ position: 'relative', width: 800, height: 600 }}>
            <div style={pointStyle} />
        </div>
    );
};
```

[Demo non-linear animation](https://codesandbox.io/s/inspiring-austin-d6ol6)
