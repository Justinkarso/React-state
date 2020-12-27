import React, { useState } from 'react'

const Counter = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i =0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return(
        <div className="another">
        <h1 className="main-header">Counter using State</h1>
            Count: {count}<br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>            
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>            
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>            
            <button onClick={incrementFive}>increment 5</button>            
        </div>

    )
}

export default Counter;