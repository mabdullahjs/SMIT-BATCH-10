import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./config/redux/reducers/todoSlice";

const App = () => {
  //selector for getting global todo array
  const selector = useSelector((state) => state.todos.todos);
  console.log("data from redux===>", selector);

  //Getting form value
  const todoValue = useRef();

  //dispatch hook for sending values to redux slice
  const dispatch = useDispatch();

  //addTodo
  const addTodoToRedux = (event) => {
    event.preventDefault();
    console.log(todoValue.current.value);
    dispatch(
      addTodo({
        title: todoValue.current.value,
      })
    );
  };

  //deleteTodo
  const deleteTodoFromRedux = (index) => {
    console.log(index);
    dispatch(removeTodo({
      index: index
    }))

  };

  //editTodo
  const editTodoFromRedux = (index) => {
    dispatch(editTodo({
      index : index
    }))
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodoToRedux}>
        <input type="text" ref={todoValue} placeholder="Enter Todo" />
        <button type="submit">AddTodo</button>
      </form>

      <ul>
        {selector.length > 0 ? selector.map((item, index) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => deleteTodoFromRedux(index)}>Delete</button>
              <button onClick={() => editTodoFromRedux(index)}>Edit</button>
            </li>
          );
        }): <h3>No Items Found...</h3>}
      </ul>
    </>
  );
};

export default App;
