import React, { useRef, useState } from 'react'

const Card = ({ title, deleteTodo, editTodo, index }) => {
    const [showTodo, setShowTodo] = useState(true);
    const editedValue = useRef();

    const saveEditTodo = () => {
        editTodo(index, editedValue.current.value)
        setShowTodo(true)
    }
    return (
        <div style={{ margin: '40px' }}>
            {showTodo ? <div>
                <h4>{title}</h4>
                <button onClick={() => deleteTodo(index)}>Delete</button>
                <button onClick={() => setShowTodo(false)}>Edit</button>
            </div> : <div>
                <input type="text" placeholder='edited value' ref={editedValue} />
                <button onClick={saveEditTodo}>save</button>
            </div>}
        </div>
    )
}

export default Card