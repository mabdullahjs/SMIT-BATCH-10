import React, { useEffect, useRef, useState } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import BasicCard from '../../components/Card';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase/Firebaseconfig';
import Typography from '@mui/material/Typography'


const Home = () => {

  useEffect(()=>{
    // async function hello (){
    // }

    // hello()

  } , [])

  //state 
  const [data, setData] = useState([]);
  //form
  const todo = useRef()


  const editTodo = (item, index) => {
    console.log('todo edited', index, item);
  }
  //add todo function
  const addTodo = async (event) => {
    event.preventDefault();
    console.log(todo.current.value);
    setData([...data, {
      todo: todo.current.value
    }]);
    try {
      const docRef = await addDoc(collection(db, "todo"), {
        todo: todo.current.value,
      });
      console.log("Document written with ID: ", docRef.id);
      todo.current.value = '';
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
  return (
    <Box className='d-flex justify-content-center flex-column align-items-center gap-5'>
      <form onSubmit={addTodo} className='d-flex justify-content-center mt-5 flex-column w-25 gap-3'>
        <TextField id="filled-basic" label="Todo" variant="filled" inputRef={todo} required min={6} />
        <Button variant="contained" type='submit'>Add Todo</Button>
      </form>
      <Box>
        {data.length > 0 ? data.map((item, index) => {
          console.log(item);
          return <BasicCard key={index} title={item.todo} editTodo={() => editTodo(item , index)} />
        }) : <Typography variant="h5" color="initial">No item found</Typography>}
      </Box>
    </Box>
  )
}

export default Home