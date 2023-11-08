import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, addDoc, getDocs, Timestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const card = document.querySelector('#card');


//user login or logout function

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = 'index.html'
    }
});


//logout function

const logout = document.querySelector('#logout-btn');

logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('logout successfully');
        window.location = 'index.html'
    }).catch((error) => {
        console.log(error);
    });
})



//get data from firestore

let arr = []

function renderPost (){
    card.innerHTML = ''
    arr.map((item) => {
        card.innerHTML += `
        <div class="card mt-2">
        <div class="card-body">
            <p><span class="h4">Title:</span>${item.title}</p>
            <p><span class="h4">Description:</span>${item.description}</p>
            <button type="button" id="delete" class="btn btn-danger">Delete</button>
            <button type="button" id="update" class="btn btn-info">Edit</button>
        </div>
    </div>`
    })

    const del = document.querySelectorAll('#delete');
    const upd = document.querySelectorAll('#update');

    del.forEach((btn , index) => {
        btn.addEventListener('click', () => {
            console.log('delete called' , arr[index]);
        })
    })
    upd.forEach((btn , index) => {
        btn.addEventListener('click', () => {
            console.log('update called' , arr[index]);
        })
    })
}

async function getDataFromFirestore() {
    arr.length = 0;
    const q = query(collection(db, "posts"), orderBy('postDate', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), docId: doc.id });
    });
    console.log(arr);
    renderPost();


}
getDataFromFirestore()


//post data on firestore

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const postObj = {
            title: title.value,
            description: description.value,
            uid: auth.currentUser.uid,
            postDate: Timestamp.fromDate(new Date()),
            like: false
        }
        const docRef = await addDoc(collection(db, "posts"), postObj);
        console.log("Document written with ID: ", docRef.id);
        postObj.docId = docRef.id;
        arr = [postObj , ...arr]
        console.log(arr);
        renderPost();
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})