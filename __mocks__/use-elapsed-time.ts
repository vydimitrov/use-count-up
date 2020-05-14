import { Options, ElapsedTimeReturnValue } from 'use-elapsed-time'

let isPlaying = false
let elapsedTime = 0
let options: Options = {}
let reset = () => {}

module.exports = {
  useElapsedTime(
    isPlayingBool: boolean,
    configObj: Options
  ): ElapsedTimeReturnValue {
    options = configObj
    isPlaying = isPlayingBool

    return { elapsedTime, reset }
  },

  __setElapsedTime(time: number): void {
    elapsedTime = time
  },

  __setResetMethod(resetFn: () => void): void {
    reset = resetFn
  },

  __resetElapsedTime(): void {
    elapsedTime = 0
  },

  __resetResetMethod(): void {
    reset = () => {}
  },

  __fireOnComplete(): void {
    // the compiler does not like optional chaining here
    const totalElapsedTime = 0
    options.onComplete && options.onComplete(totalElapsedTime)
  },

  __getConfig(): Options {
    return options
  },

  __resetConfig(): void {
    options = {}
  },

  __getIsPlaying(): boolean {
    return isPlaying
  },

  __resetIsPlaying(): void {
    isPlaying = false
  },
}
