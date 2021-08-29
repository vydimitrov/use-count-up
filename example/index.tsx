import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { CountUp } from '../src/index'

const Count = () => {
  const [isPlaying, setIsPlaying] = useState(true)
 

  return (
    <div>
      <span><CountUp start={0} end={10} isCounting /></span>
      <br />
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        Toggle Playing
      </button>
    </div>
  )
}

ReactDOM.render(<Count />, document.querySelector('#root'))
