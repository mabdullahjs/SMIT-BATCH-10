import { signOut , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "./config.js";


onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location = 'login.html'
        return
    }
});

const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });
})