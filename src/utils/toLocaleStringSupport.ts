export const toLocaleStringSupports = () => 'toLocaleString' in Number

export const toLocaleStringSupportsLocales = () => {
  var number = 0
  try {
    number.toLocaleString('i')
  } catch (e) {
    return e.name === 'RangeError'
  }
  return false
}

export const toLocaleStringSupportsOptions = () => {
  return !!(
    typeof Intl == 'object' &&
    Intl &&
    typeof Intl.NumberFormat == 'function'
  )
}
