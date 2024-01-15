import React, { useRef } from 'react'
import Button from '@mui/material/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase/firebaseConfig';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => { 
                const user = userCredential.user;
                navigate('/');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    return (
        <div>
            <form onSubmit={login}>
                <input type="email" ref={email} /> <br /><br />
                <input type="password" ref={password} /> <br /><br />
                <Button variant="contained" type='submit'>Login</Button>
            </form>
        </div>
    )
}

export default Login

