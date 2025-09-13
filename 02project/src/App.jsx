import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCount] = useState(0)
 
  // let counter = 0;
  const addValue = () => {
    if(counter <20){
    setCount(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
  };

  return (
    <>
   
      <h1>chai aur react </h1>
      <h2>counte value {counter}</h2>
      <button onClick={addValue}>add value {counter}</button>
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
