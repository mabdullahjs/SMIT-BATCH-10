import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo: (state , action)=>{
            state.todos.push({
               title: action.payload.title,
               id: nanoid()
            })
        },
        removeTodo:(state , action)=>{
            state.todos.splice(action.payload.index , 1);
        },
        editTodo:(state , action)=>{
            const updatedValue = prompt('enter new value');
           state.todos[action.payload.index].title = updatedValue
        }
    }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer