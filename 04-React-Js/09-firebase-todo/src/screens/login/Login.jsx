import React, { useRef, useState } from 'react'
import { TextField, Button, Box, CircularProgress, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/Firebaseconfig';
import { useNavigate } from 'react-router-dom'


const Login = () => {
  //use state
  const [loading, setLoading] = useState(false);

  //form value
  const email = useRef()
  const password = useRef()

  //navigate
  const navigate = useNavigate()

  //login 
  const login = (event) => {
    event.preventDefault();
    const registerEmail = email.current.value;
    const registerPassword = password.current.value;
    signInWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    setLoading(!loading)
  }
  return (
    <>
      <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-item-center'>
        <form onSubmit={login} className='d-flex justify-content-center flex-column w-25 gap-5'>
          <TextField type='email' id="standard-basic" label="Email" variant="standard" inputRef={email} required />
          <TextField type='password' id="standard-basic" label="Password" variant="standard" inputRef={password} required />
          <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'Login'}</Button>
        </form>
      </Box>
      {/* <Typography variant='caption' className='text-center'>Not a user?</Typography> */}
    </>
  )
}

export default Login