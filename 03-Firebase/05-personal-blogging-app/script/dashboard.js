import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc, getDocs, Timestamp, query, orderBy, deleteDoc, doc, updateDoc, where } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { auth, db } from './config.js';

console.log('hello world');
let userObj;
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // console.log(user);
        const uid = user.uid;
        const q = query(collection(db, "users"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            userObj = doc.data()
            console.log(userObj);
        });
    }
});

const form = document.querySelector("#form")
const title = document.querySelector("#title")
const description = document.querySelector("#description")
const head = document.querySelector("#head")
const para = document.querySelector("#para")
let arr =[]

form.addEventListener("submit" , async (e)=>{
    e.preventDefault();
    const obj ={
        title: title.value,
        Description: description.value,
        uid:auth.currentUser.uid,
        postDate: Timestamp.fromDate(new Date()),
        userObj
    }
    try {
        const docRef = await addDoc(collection(db, "posts"),obj);
        console.log("Document written with ID: ", docRef.id);
        console.log(arr);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      arr.push(obj)
})