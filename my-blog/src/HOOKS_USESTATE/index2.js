import { setState } from 'expect'
import React, { useState } from 'react'
// import useState from 'react'

export default function HOOKES_USESTATE2() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const deIncrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Count : { count }</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={deIncrement}>Decrement</button>
        </div>
    )
}
