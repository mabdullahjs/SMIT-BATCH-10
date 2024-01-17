import React, { useRef, useState } from 'react'
import Card from './Card';

const App = () => {

  const todoVal = useRef();
  const [data, setData] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(todoVal.current.value);
    data.push(todoVal.current.value);
    setData([...data]);
    todoVal.current.value = ''

  }

  const deleteTodo = (index) => {
    console.log('todo delete', index);
    data.splice(index, 1);
    setData([...data]);
  }

  const editTodo = (index, value) => {
    console.log('todo edited', value);
    data.splice(index , 1 , value);
    setData([...data]);
  }
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" ref={todoVal} placeholder='enter todo' />
        <button type='submit'>AddTodo</button>
      </form>
      {data.length > 0 ? data.map((item, index) => {
        return <Card key={index} title={item} deleteTodo={deleteTodo} editTodo={editTodo} index={index} />
      }) : <h1>No todo...</h1>}
    </>
  )
}

export default App