import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useRef } from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({ title, editTodo, deleteTodo, index }) {
  const [showTodo, setShowTodo] = useState(true);
  const editedValue = useRef();

  const editedTodoFunc = ()=>{
    editTodo(index , editedValue.current.value);
    setShowTodo(true)
  }
  return (
    <Card sx={{ minWidth: 275 }} className='mt-2'>
      {showTodo ?
        <div>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={deleteTodo}>Delete</Button>
            <Button size="small" onClick={()=> setShowTodo(false)}>Edit</Button>
          </CardActions>
        </div> : <div>
          <input type="text" placeholder='edited value' ref={editedValue} />
          <button onClick={editedTodoFunc}>save</button>
        </div> 
    }

    </Card>
  );
}