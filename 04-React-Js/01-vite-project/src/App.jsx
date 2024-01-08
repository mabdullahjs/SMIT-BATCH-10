import { useState } from "react"

function App() {
  const [num, setNum] = useState(0);
  const addNum = () => {
    setNum(num + 1);
  }
  const removeNum = () => {
    if(num === 0){
      console.log('ab nahi hoskta');
    }else{
      setNum(num - 1);
    }
  }
  return (
    <>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <button onClick={addNum}>Add {num}</button>
      <button onClick={removeNum}>Sub {num}</button>
    </>
  )
}

export default App