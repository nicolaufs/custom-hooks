

import React, { useState } from 'react'

export const useCounter = ({ initialValue = 0, minValue = 0, maxValue = 1000000 }) => {

    const [counter, setCounter] = useState(initialValue)

    const decrement = (value = 1) => {
        if (counter - value < minValue) return
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    const increment = (value = 1) => {
        if (counter + value > maxValue) return
        setCounter(counter + value)
    }

    return {
        counter,
        reset,
        decrement,
        increment
    }
}
