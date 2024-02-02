import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './config/redux-config/reducers/todoslice';

const App = () => {
  const todoRef = useRef();


  //dispatch
  const dispatch = useDispatch()

  //selector
  const selector = useSelector(state => state.todos);

  const addTodoReducer = (event) => {
    event.preventDefault();
    console.log(todoRef.current.value);
    dispatch(addTodo({
      title: todoRef.current.value
    }))
    console.log('data from redux===>', selector);

    todoRef.current.value = ''

  }

  const deleteTodo = (index)=>{
    dispatch(removeTodo({
      index: index
    }))
  }
  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={addTodoReducer}>
        <input type="text" placeholder='todo' ref={todoRef} />
        <button type='submit'>AddTodo</button>
      </form>

      <ul>
        {selector.map((item, index) => {
          return <li key={item.id}>{item.title}
          <button onClick={()=>deleteTodo(index)}>delete</button>
          </li>
        })}

      </ul>
    </>
  )
}

export default App