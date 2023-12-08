// const date = new Date('2023-11-29T13:30:00').toLocaleTimeString();
// // const date = new Date().toLocaleTimeString();

// console.log(date.slice(0, 2));
// const time = +date.slice(0, 2)
// const format = date.slice(9);

// if (time > 6 && time < 12 && format === 'AM') {
//     console.log('good morning');
// }else if(time > 12 && time < 4 && format === 'PM'){
//     console.log('Good Afternoon');
// }else if(time > 4 && time < 8 && format === 'PM'){
//     console.log('Good Evening');
// } else {
//     console.log('good Night');
// }






// subah 6 sa dophr 12 tk goodmorning
// 12 sa 4 tk good afternoon
// 4 sa 8 tk good evening
// 8 sa 6 tk good Night









import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, addDoc, getDocs, Timestamp, query, orderBy, deleteDoc, doc, updateDoc, where } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";



const logoutBtn = document.querySelector('#logoutBtn');
const profileBtn = document.querySelector('#profileBtn');
const dashboardBtn = document.querySelector('#dashboardBtn');
const div = document.querySelector('.main-div');

let Loginuser = false
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        Loginuser = true
        return
    }else{
        logoutBtn.innerHTML = 'Login'
        profileBtn.style.display = 'none'
        dashboardBtn.style.display = 'none'
        
    }
});
const data = []
const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
    // console.log(doc.data());
    data.push(doc.data())
});
console.log(data);

function renderData(){
    data.map((item)=>{
        div.innerHTML += `
        <div class="bg-white p-8 rounded-lg mb-5  shadow-lg max-w-xl ml-40 w-full">
        <div class="flex gap-5">
            <div class="mb-4 text-center">
                <img src="${item.userObj.profileUrl}" alt="inzamam malik" class="rounded-xl w-20 h-20 mb-4">
            </div>
            <div class="w-1/2">
                <h2 class="text-xl font-bold text-[#212529]">${item.title}
                </h2>
                <h5 class="text-sm mt-1 text-[#6C757D]">${item.userObj.firstName + item.userObj.lastName } - Auguest 16th, 2023</h5>
            </div>
        </div>

        <P class="text-[#6C757D] text-xs mt-3 leading-relaxed">${item.Description}</P>
    </div>
        
        `
    })
}

renderData()


 logoutBtn.addEventListener('click' , ()=>{
    if(Loginuser){

        signOut(auth).then(() => {
            window.location = 'login.html'
        }).catch((error) => {
            console.log(error);
        });
    }else{
        window.location = 'login.html'
    }
 })


















