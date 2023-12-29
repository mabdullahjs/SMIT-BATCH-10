import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    console.log(text);
    todo.push(text)
    setTodo([...todo]);
    console.log(todo);
    setText("")
  }

  return (
    <>
      <h1>Todo App {text}</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter text" onChange={(e) => setText(e.target.value)} value={text} />
        <button type="submit">addTodo</button>
      </form>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}
            <button onClick={()=>deleteTodo(index)}>delete</button>
            <button>edit</button>
          </li>
        })}
      </ul>
    </>
  )
}

export default App