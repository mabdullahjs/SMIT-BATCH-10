


// const fruits = ["Apple", "Banana", "Orange", "Strawberry", "Grapes", "Watermelon", "Mango", "Pineapple", "Cherry", "Pear", "Peach", "Plum", "Kiwi", "Blueberry", "Raspberry"];

// const obj = {
//     name: 'abdullah',
//     email: 'mabdullah@gmail.com',
//     phoneNumber: '0301 jab kro jab band',
//     age: 20,
//     cnic: 42101000000000,
//     gender: 'male',
//     nationality: 'ahsan ki nationality uganda ki ha',
// }



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






// const submit = document.querySelector('#form');
// const names = document.querySelector('#name');
// const fname = document.querySelector('#fname');
// const age = document.querySelector('#age');
// // console.log(submit);

// const arr = []
// submit.addEventListener('submit', (e) => {
//     e.preventDefault()
//     arr.push({
//         names: names.value,
//         fathername: fname.value,
//         age: age.value
//     })
//     // name.value = ''
//     console.log(arr);
// })











const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for each


// const arrNum = arr.forEach( function (num){
//     console.log(num + 10);
//     return num
// } )

// console.log(arrNum);




// arr.forEach((item) => {
//     console.log(item);
// })



// function printArr (item){
//     console.log(item);
// }


// arr.forEach(printArr)








// const filterArr = arr.filter((num)=>{
//     return num > 5
// })

// console.log(filterArr);










// const filterArr = arr.filter(num => (num > 5))

// console.log(filterArr);



























const books = [
    {
        title: "Book 1",
        author: "Author 1",
        publishedYear: 2021,
        subject: "Science"
    },
    {
        title: "Book 2",
        author: "Author 2",
        publishedYear: 2019,
        subject: "History"
    },
    {
        title: "Book 3",
        author: "Author 3",
        publishedYear: 2020,
        subject: "Fiction"
    },
    {
        title: "Book 4",
        author: "Author 4",
        publishedYear: 2025,
        subject: "Fiction"
    },
    {
        title: "Book 5",
        author: "Author 5",
        publishedYear: 2018,
        subject: "chemistry"
    },
    {
        title: "Book 6",
        author: "Author 6",
        publishedYear: 2022,
        subject: "Fiction"
    },
];


// const filteredBooks = books.filter(item => item.publishedYear > 2020 && item.subject === 'Fiction');
// console.log(filteredBooks);






















let filteredBooks = books.filter(function (item) {
    return item.subject === 'Fiction' 
})

console.log(filteredBooks);

const div = document.querySelector('div');
filteredBooks.forEach(function (item){
    div.innerHTML += `<h1>${item.title}</h1>`
})


















































































































































