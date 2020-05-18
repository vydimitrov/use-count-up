const toLocaleStringSupportsLocales = () => {
  try {
    const number = 0
    number.toLocaleString('i')
  } catch (e) {
    return e.name === 'RangeError'
  }
  return false
}

const toLocaleStringSupportsOptions = () => {
  return !!(
    typeof Intl === 'object' &&
    Intl &&
    typeof Intl.NumberFormat === 'function'
  )
}

export const getToLocaleStringParamsSupport = () => {
  const areLocalesSupported = toLocaleStringSupportsLocales()
  const areOptionsSupported = toLocaleStringSupportsOptions()

  return areLocalesSupported && areOptionsSupported
}
