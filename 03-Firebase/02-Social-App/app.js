import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db, storage } from "./config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js'


const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const googleBtn = document.querySelector('#googleBtn');
const githubBtn = document.querySelector('#githubBtn');


//email and password authentication

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
            console.log(errorMessage);
        });

})


//google authentication

const provider = new GoogleAuthProvider();

googleBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(token);
            const user = result.user;
            console.log(user);
            //data mangwalia aik [] query lagadi user.uid === uid agar data hua to array ma push hojayega arr.length < 0
            addDoc(collection(db, "users"), {
                name: user.displayName,
                email: user.email,
                uid: user.uid,
                profileUrl: user.photoURL
            }).then((res) => {
                console.log(res);
                window.location = 'home.html';
            }).catch((err) => {
                console.log(err);
            });

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});


//github authentication
const githubProvider = new GithubAuthProvider();
githubBtn.addEventListener('click', () => {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log(token);
            console.log(user);
            addDoc(collection(db, "users"), {
                name: user.displayName,
                uid: user.uid,
                profileUrl: user.photoURL
            }).then((res) => {
                console.log(res);
                window.location = 'home.html';
            }).catch((err) => {
                console.log(err);
            });
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})