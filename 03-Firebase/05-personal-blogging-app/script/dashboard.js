import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc , Timestamp} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { auth, db } from './config.js';

console.log('hello world');
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
    }
});

const form = document.querySelector("#form")
const title = document.querySelector("#title")
const description = document.querySelector("#description")
let arr =[]

form.addEventListener("submit" , async (e)=>{
    e.preventDefault();
    // console.log(title.value);
    // console.log(description.value);
    const obj ={
        title: title.value,
        Description: description.value,
        uid:auth.currentUser.uid,
        postDate: Timestamp.fromDate(new Date())
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