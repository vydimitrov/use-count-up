import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { CountUp } from '../src/index'

const Count = () => {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div>
      <span>
        <CountUp
          start={32237}
          easing="linear"
          duration={undefined}
          isCounting={isPlaying}
          // updateInterval={1}
          // onUpdate={(value) => console.log(value)}
          formatter={(value) => value.toLocaleString()}
        >
          {({ value }) => value}
        </CountUp>
      </span>
      <br />
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        Toggle Playing
      </button>
    </div>
  )
}

ReactDOM.render(<Count />, document.querySelector('#root'))
