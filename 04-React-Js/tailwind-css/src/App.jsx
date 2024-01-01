import { useState } from "react"
import Button from "./button";
import './app.css'

function App() {
  const [data, setData] = useState(0);
  function addCounter(){
    setData(data + 1);
  }
  return (
    <>
      <h1 className="mt">Hello world {data}</h1>
      <h1 className="mt">Hello world {data}</h1>
      <Button name="click" age = {20} arr={['flower' , 'sunflower']} func={addCounter}/>
      {/* <button onClick={addCounter}>click</button> */}
    </>
  )
}

export default App