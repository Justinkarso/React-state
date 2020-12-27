import React, { useState, useRef, useEffect } from 'react'

function RandomNumber() {
    const [items, setItems] = useState([]); 

    function handleDelete(i) {
        const newListState = [... items]
        newListState.splice(i, 1)
        setItems(newListState)
        console.log(newListState)
    }
    
    const handleClick = () => {
        const newListState = [... items]
        newListState.push(Math.floor(Math.random() * 10))
        setItems(newListState)
        console.log(newListState)
    }

    return (
        <div className="array">
        <h1 className="main-header">Random Number list</h1>
            <button onClick={handleClick}>Add a Number</button>
            <ul>
                {items.map((item, i) => {
                    return <div>
                        <li key={i}>{item}</li>
                        <button onClick={() => handleDelete(i)}>Delete</button>
                    </div>
                })}
            </ul>
        </div>
    )
}

export default RandomNumber
