import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, addDoc, getDocs, query, where, Timestamp, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

//check user is login or not
let userUid;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    userUid = uid
    renderTodo(uid)
  } else {
    window.location = 'login.html'
  }
});

const logout = document.querySelector('#logout');
const form = document.querySelector('#form');
const title = document.querySelector('#title');
const desc = document.querySelector('#description');
const div = document.querySelector('.container');


// get data from firestore
let arr = [];
async function renderTodo(uid) {
  const q = query(collection(db, "todos"), where("uid", "==", uid) , orderBy('timestamp' , 'desc'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  div.innerHTML = ''
  console.log(arr);
  arr.map((item) => {
    div.innerHTML += `
    <h1>Title: ${item.title}</h1>
    <h1>Description: ${item.description}</h1>
    <button>delete</button>
    `
  })
}




//add data
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      title: title.value,
      description: desc.value,
      uid: auth.currentUser.uid,
      timestamp: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})



//logout function

logout.addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location = 'login.html'
  }).catch((error) => {
    console.log(error);
  });
})