import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth, db, storage } from "./config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js'

const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const userName = document.querySelector('#name');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user);
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    name: userName.value,
                    email: email.value,
                    uid: user.uid
                });
                console.log("Document written with ID: ", docRef.id);
                window.location = 'login.html'
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})



//firebase storage

const file = document.querySelector('#file');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const files = file.files[0];
    console.log(files);
    const storageRef = ref(storage, email.value);
    uploadBytes(storageRef, files).then(() => {
        getDownloadURL(storageRef).then((url) => {
            console.log(url);
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    })
})