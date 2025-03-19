import React from 'react'
import { useCounterStore } from '../store/useCounterStore'

const Counter: React.FC = () => {
    const { count, increase, decrease, reset} = useCounterStore()


  return (
    <>
        <h2>Count: {count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter