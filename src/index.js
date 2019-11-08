import { useElapsedTime } from 'use-elapsed-time';

const defaultConfig = {
	start: 0,
	end: undefined,
	duration: undefined,
	onComplete: undefined,
	easing: (t, b, c, d) => { t /= d; t--; return c*(t*t*t*t*t + 1) + b; },
	formatter: value => Math.round(value)
};

const getReturnValue = (formatter, value) => {
	return typeof formatter === 'function' ? formatter(value) : value;
};

const useCountUp = (isCounting = false, config = {}) => {
	const {
		start,
		end,
		duration,
		easing,
		formatter,
		onComplete
	} = { ...defaultConfig, ...config };

	const durationMilliseconds = typeof duration === 'number' ? duration * 1000 : undefined;
	const elapsedTime = useElapsedTime(isCounting, { durationMilliseconds, onComplete });

	if (typeof end === 'undefined' || typeof duration === 'undefined' || typeof easing !== 'function') {
		return getReturnValue(formatter, elapsedTime);
	}

	const value = easing(elapsedTime, start, end - start, durationMilliseconds);
	return getReturnValue(formatter, value);
};

export { useCountUp };