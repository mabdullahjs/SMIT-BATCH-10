import { signInWithEmailAndPassword , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const modalMessage = document.querySelector('#modal-message');
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location = 'home.html'
        console.log(user);
        return
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = 'home.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            modalMessage.innerHTML = 'invalid-login-credentials'
            my_modal_1.showModal()
        });
})