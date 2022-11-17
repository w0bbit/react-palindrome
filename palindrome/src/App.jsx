import { useState } from 'react'
import './App.css'
import Header from './components/Header'
print = console.log;


function App() {

  const [isPalindrome, setIsPalindrome] = useState('');

  const handleChange = () => {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = inputElement.value;

    if (inputElement.value == inputElement.value.split('').reverse().join('')) {
      setIsPalindrome(true)
    } else {
      setIsPalindrome(false)
    }

  }

  return (
    <div className="App">
      <Header text={'Palindrome'} />
      <input id='input' onChange={handleChange}></input>
      <p><span id='output'></span> 
      {
        isPalindrome === ''
        ? ''
        : isPalindrome
        ? ' is a palindrome' 
        : ' is not a palindrome'
      }</p>
    </div>
  )
}

export default App
