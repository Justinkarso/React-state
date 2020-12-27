import React, { useState } from 'react';

import './css/main.css'

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [listState, setListState] = useState([]);

    const handleClick = () => {
      const newListState = [... listState]
      newListState.push(inputValue)
      setListState(newListState)
      console.log(newListState)
  }

  const handleDelete = i => {
    const newListState = [...listState]
    newListState.splice(i, 1)
    setListState(newListState)
    console.log(newListState)
  }

  return(
    <div className="form">
      <h1 className="main-header">Todo List</h1>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      <p> You are adding <b>{inputValue}</b> to the list </p>
      <button onClick={handleClick}> Add Item </button>
      <ul>
        {listState.map((item, i) => {
          return <div>
            <li key={i}>{item}</li>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        })}
      </ul>
    </div>
  )
}

export default Todo;