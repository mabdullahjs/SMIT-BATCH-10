import React, { useEffect, useState } from 'react'
import svg from './assets/react.svg'
import Button from './components/Button';

const App = () => {
  const [password, setPassword] = useState('abcd');
  const [length, setLength] = useState(15);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbol] = useState(false);


  const [counter, setCounter] = useState(0);

  useEffect(() => {
    generatePassword()
  }, [length, numbers, symbol])

  // useEffect(()=>{
  //   simpleConsole();
  // } , [])

  function includeNumber(e) {
    setNumbers(e.target.checked);
  }
  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }

  function generatePassword() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numbers) {
      str += '0123456789'
    }
    if (symbol) {
      str += '/><$#@!%^&*+'
    }
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      let char = str.charAt(randomNumber);
      pass += char;
    }
    setPassword(pass);
  }


  // function simpleConsole(){
  //   console.log('simple console');
  // }

  function addCounter() {
    setCounter((prev)=>{
      return prev + 1
    });
    setCounter((prev)=>{
      return prev + 1
    });
    setCounter((prev)=>{
      return prev + 1
    });
    setCounter(prev => prev + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  }
  return (
    <>
      <h2>{password}</h2>
      <label htmlFor="length">{length}</label>
      <input type="range" id="length" min={8} max={20} onChange={(e) => setLength(e.target.value)} value={length} /><br />

      <label htmlFor="number">Number</label>
      <input type="checkbox" id="number" onChange={includeNumber} /><br />
      <label htmlFor="symbol">Symbol</label>
      <input type="checkbox" id="symbol" onChange={includeSymbol} />
      {/* <img src={svg} alt="logo" /> */}
      <h1>Counter {counter}</h1>
      <button onClick={addCounter}>add</button>
      <Button title = 'click'/>
      <Button title = 'submit'/>
      <Button title = 'add'/>
    </>
  )
}

export default App