export const defaultEasing = (
  t: number,
  b: number,
  c: number,
  d: number
): number => {
  return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
}
