import React, { useRef, useState } from 'react'
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/Firebaseconfig';
import {useNavigate} from 'react-router-dom'

const Register = () => {
  //use state
  const [loading, setLoading] = useState(false);

  //form value
  const email = useRef()
  const password = useRef()

  //navigate
  const navigate = useNavigate()

  //login 
  const register = (event) => {
    event.preventDefault();
    console.log('login clicked');
    const registerEmail = email.current.value;
    const registerPassword = password.current.value;
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => { 
        const user = userCredential.user;
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });

  }
  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={register} className='d-flex justify-content-center flex-column w-25 gap-5'>
        <TextField type='email' id="standard-basic" label="Email" variant="standard" inputRef={email} required />
        <TextField type='password' id="standard-basic" label="Password" variant="standard" inputRef={password} required />
        <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'Register'}</Button>
      </form>
    </Box>
  )
}

export default Register