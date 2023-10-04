


const fruits = ["Apple", "Banana", "Orange", "Strawberry", "Grapes", "Watermelon", "Mango", "Pineapple", "Cherry", "Pear", "Peach", "Plum", "Kiwi", "Blueberry", "Raspberry"];

const obj = {
    name: 'abdullah',
    email: 'mabdullah@gmail.com',
    phoneNumber: '0301 jab kro jab band',
    age: 20,
    cnic: 42101000000000,
    gender: 'male',
    nationality: 'ahsan ki nationality uganda ki ha',
}



// //for of loop


// for (let iteration of fruits) {
//     // console.log(iteration);

// }




// //for in loop

// for (const key in obj) {
//     // console.log(fruits[key]);
//     console.log(`${key} : ${obj[key]}`);
// }








//arrow functions



// greetUser('abdullah');

//  function greetUser (name){
//     console.log(`hello ${name}`);
//     return `hello ${name}`
// }



// const greetUser = (name) => `hello ${name}`
// const greetUser = (name) => {
//     return `hello ${name}`
// }
// const greetUser = (name) => (
//     `hello ${name}`
// )


// const greetUser = name => `hello ${name}`;

// console.log(greetUser('abdullah'));






const submit = document.querySelector('#form');
const names = document.querySelector('#name');
const fname = document.querySelector('#fname');
const age = document.querySelector('#age');
// console.log(submit);

const arr = []
submit.addEventListener('submit', (e) => {
    e.preventDefault()
    arr.push({
        names: names.value,
        fathername: fname.value,
        age: age.value
    })
    // name.value = ''
    console.log(arr);
})
























































