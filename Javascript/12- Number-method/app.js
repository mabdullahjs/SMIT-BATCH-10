


// const num = 9.2;
// // console.log(Math.round(num));
// // console.log(Math.ceil(num));
// // console.log(Math.floor(num));





// // 10.2808




// // console.log(Math.ceil(Math.random()*10));
// // console.log(Math.ceil(Math.random()*10));
// // console.log(Math.round(Math.random()*5));















// //toss
const img = document.querySelector('img')
const p = document.querySelector('p')
function masjid(){
    const randomNumber = Math.ceil(Math.random()*2);
    console.log(randomNumber)
    if(randomNumber === 1){
        p.innerHTML = 'Hurrah! You won the toss';
        img.src = './assets/masjid.jpeg'
    }else{
        p.innerHTML = 'Sorry! You Loss the toss';
        img.src = './assets/chand.jpeg'
    }
}
function chand(){
    const randomNumber = Math.ceil(Math.random()*2);
    console.log(randomNumber)
    if(randomNumber === 1){
        p.innerHTML = 'Sorry! You Loss the toss';
        img.src = './assets/masjid.jpeg'
    }else{
        p.innerHTML = 'Hurrah! You won the toss';
        img.src = './assets/chand.jpeg'
    }
}





// // const input = document.querySelector('input');
// // const ul = document.querySelector('ol');
// // let todo = [];

// // function renderTodo(){
// //     for (let i = 0; i < todo.length; i++) {
// //         ul.innerHTML += `<li>${todo[i]}</li>
// //         <button onclick='deleteTodo(${i})'>Delete</button>
// //         <button onclick='editTodo(${i})'>Edit</button>`
// //     }
// // }
// // function addTodo(e) {
// //     e.preventDefault();
// //     ul.innerHTML = '';
// //     todo.push(input.value);
// //     renderTodo();
// //     input.value = '';
// // }

// // function deleteTodo(index){
// //     ul.innerHTML = '';
// //     todo.splice(index , 1);
// //     renderTodo()
// // }
// // function editTodo(index){
// //     console.log('edit function called' , index)
// // }






// const input = document.querySelector('.todo');
// const ol = document.querySelector('ol');


// let todo = [];
// function addTodo(e) {
//     e.preventDefault();
//     ol.innerHTML = ''
//     // console.log(input.value);
//     todo.push(input.value);
//     console.log(todo);
//     for (let i = 0; i < todo.length; i++) {
//         // console.log(todo[i]);
//         ol.innerHTML = ol.innerHTML + `<li>${todo[i]}</li>
//          <button onclick='deleteTodo(${i})'>Delete</button>
//           <button onclick='editTodo(${i})'>Edit</button>`
//     }
//     input.value = '';
// }


// function deleteTodo(index) {
//     ol.innerHTML = '';
//     // console.log(index);
//     todo.splice(index, 1);
//     for (let i = 0; i < todo.length; i++) {
//         // console.log(todo[i]);
//         ol.innerHTML = ol.innerHTML + `<li>${todo[i]}</li>
//          <button onclick='deleteTodo(${i})'>Delete</button>
//           <button onclick='editTodo(${i})'>Edit</button>`
//     }
// }
// function editTodo(index) {
//     ol.innerHTML = '';
//     let userValue = prompt('Enter edited value');
//     todo.splice(index, 1 , userValue);
//     for (let i = 0; i < todo.length; i++) {
//         // console.log(todo[i]);
//         ol.innerHTML = ol.innerHTML + `<li>${todo[i]}</li>
//          <button onclick='deleteTodo(${i})'>Delete</button>
//           <button onclick='editTodo(${i})'>Edit</button>`
//     }
//     console.log(todo)
// }



// const div = document.querySelector('div');
// const body = document.querySelector('body');
// const color = ['red', 'green', 'blue', 'purple', 'orange', 'brown', 'yellow'];

// for (let i = 0; i < color.length; i++) {
//     div.innerHTML += `<button onclick='changeColor(color[${i}])'>${color[i]}</button>`
// }


// function changeColor(i) {
//     console.log(i);
//     // body.style.backgroundColor = color[i];
// }

// function abc(i) {
//     console.log(i)
// }

// abc('abdullah')


// const num = 5;
// if (num > 4 && num < 6 || num < 10){
//     console.log('abc')
// }