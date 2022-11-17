import { useState } from 'react'
import './App.css'
print = console.log;
function App() {

  const handleChange = () => {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = inputElement.value;
  }

  return (
    <div className="App">
      <input id='input' onChange={handleChange}></input>
      <h3 id='output'></h3>
    </div>
  )
}

export default App
