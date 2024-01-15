import React, { useRef } from 'react'
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase/firebaseConfig';

const Register = () => {
    const email = useRef();
    const password = useRef();

    function register(event) {
        event.preventDefault();
        const emails = email.current.value;
        const passwords = password.current.value  
        createUserWithEmailAndPassword(auth, emails, passwords)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div>
            <form onSubmit={register}>
                <input type="email" ref={email} /> <br /><br />
                <input type="password" ref={password} /> <br /><br />
                <Button variant="contained" type='submit'>Register</Button>
            </form>
        </div>
    )
}

export default Register