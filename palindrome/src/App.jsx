import { useState } from 'react'
import './App.css'
print = console.log;
function App() {

  const handleChange = () => {
    print('hi')
  }

  return (
    <div className="App">
      <input onChange={handleChange}></input>
    </div>
  )
}

export default App
