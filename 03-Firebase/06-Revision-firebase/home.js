import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, addDoc, getDocs, query, where, Timestamp, orderBy, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

//check user is login or not
let arr = [];
let userUid;
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    userUid = uid;
    const q = query(collection(db, "todos"), where("uid", "==", uid), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push({ ...doc.data(), docId: doc.id });
    });
    renderTodo()
  } else {
    window.location = 'login.html'
  }
});

const logout = document.querySelector('#logout');
const form = document.querySelector('#form');
const title = document.querySelector('#title');
const desc = document.querySelector('#description');
const div = document.querySelector('.container');


function renderTodo() {
  div.innerHTML = ''
  console.log(arr);
  arr.map((item) => {
    div.innerHTML += `
    <h1>Title: ${item.title}</h1>
    <h1>Description: ${item.description}</h1>
    <button id="deleteBtn">delete</button>
    <button id="updateBtn">update</button>
    `
  })

  //delete todo 
  const deleteBtn = document.querySelectorAll('#deleteBtn');
  deleteBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      // console.log('delete called' , index);
      deleteTodo(index);
    })
  })

  //update todo
  const updateBtn = document.querySelectorAll('#updateBtn');
  updateBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      console.log('update called', index);
      updateTodo(index);
    })
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
    arr.unshift({
      title: title.value,
      description: desc.value,
      uid: userUid,
      docId:docRef.id
    })
    renderTodo()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})



//delete todos

function deleteTodo(index) {
  deleteDoc(doc(db, "todos", arr[index].docId))
    .then(() => {
      arr.splice(index, 1);
      renderTodo()
    }).catch((err) => {
      console.log(err);
    })
}
function updateTodo(index) {
  const title = prompt('enter title to update');
  const todosRef = doc(db, "todos", arr[index].docId);
  
  updateDoc(todosRef, {
    title: title
  }).then(()=>{
    arr[index].title = title;
    renderTodo()
  }).catch((err)=>{
    console.log(err);
  })

  renderTodo()
}

//logout function

logout.addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location = 'login.html'
  }).catch((error) => {
    console.log(error);
  });
})