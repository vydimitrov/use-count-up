const easeOutExpo = (t: number, b: number, c: number, d: number): number => {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
}

const easeInExpo = (t: number, b: number, c: number, d: number): number => {
  return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
}

const linear = (t: number, b: number, c: number, d: number): number => {
  return (c * t) / d + b
}

export const easings = {
  easeInExpo,
  easeOutExpo,
  linear,
}
