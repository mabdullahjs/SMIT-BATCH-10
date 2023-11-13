import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { auth, db } from './config.js';

//check user login or logout
const username = document.querySelector('#username');
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        console.log('userUid ===>', uid);

        //get user data

        const q = query(collection(db, "users"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            username.innerHTML = doc.data().name
        });

    } else {
        window.location = 'login.html'
    }
});




//logout user
const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('logout successfull');
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });
})