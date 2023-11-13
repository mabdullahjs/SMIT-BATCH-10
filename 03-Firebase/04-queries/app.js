import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth, db } from './config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const email = document.querySelector('#email');
const name = document.querySelector('#name');
const password = document.querySelector('#password');
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            addDoc(collection(db, "users"), {
                name:name.value,
                email: email.value,
                uid: user.uid
            }).then((res)=>{
                console.log(res);
                window.location = 'login.html'
            }).catch((err)=>{
                console.log(err);
            })

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})



