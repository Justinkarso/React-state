import React from 'react';

import Todo from './modules/todo'
import Counter from './modules/counter'
import InputState from './modules/inputState'
import RandomNumber from './modules/randomNumber'

const App = () => {
  return(
    <>
      <div className="container">
        <Todo />
        <Counter/>
        <InputState/>
        <RandomNumber/>
      </div>
    </>
  )
}

export default App;