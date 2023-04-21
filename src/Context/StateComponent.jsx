import React, { useState } from 'react'
import { createContext } from 'react'

export const CounterContext = createContext()

const StateComponent = ({children}) => {

    const [counter, setCounter] = useState(0)
    
    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }

  return (
    <div>StateComponent</div>
  )
}

export default StateComponent