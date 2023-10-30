// const h1 = document.getElementById('head-one');
// console.log(h1);
// const h1 = document.querySelector("#head-one");
// console.log(h1.innerHTML);
// h1.innerHTML = "Abdullah";























// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const login = document.querySelector("#login");


// console.log(email)
// console.log(password)
// console.log(login)


// function loginUser() {
//     // console.log("hello user");
//     console.log(email.value)
//     console.log(password.value)
// }













































const names = document.querySelector('#name');
const h3 = document.querySelector("h3");


function greetUser() {
    console.log(names.value)
    h3.innerHTML = "Hello " + names.value;
    names.value = ""
    const names = "Muhammad ABDULLAH";
    console.log(names.toLowerCase());
}
function clears() {
    h3.innerHTML = ""
}













