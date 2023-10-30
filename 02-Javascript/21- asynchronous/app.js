//sync || async


// console.log('hello world');
// console.log('hello world 02');
// console.log('hello world 03');

// const data = request to the server
// console.log(data);



// const task1 = 5second
// const task2 = 2second
// const task3 = 7second
// const task4 = 1second



// setTimeout
// setInterval
// axios
// promises
// async await




// console.log('hello world');





// setTimeout(()=>{
//     console.log('line 4');
// } , 0)
// console.log('line 1');
// console.log('line 2');
// console.log('line 3');
// console.log('line 5');





// try{
//     aler('hello world')
// }catch(error){
//     console.log(error);
// }



// // aler('hello world');
// console.log('hello world');















//setTimeOut
//set interval
//promises
//async and await
//axios





// const shaadiScnz = new Promise((resolve , reject)=>{
//     const bankBalance = 4000000;
//     if(bankBalance > 2000000){
//         resolve('shaadi mubarak')
//     }else{
//         reject('meri rooh tumhara pass rhaigi..')
//     }
// })


// shaadiScnz.then((res)=>{
//     console.log(res);
//     console.log('then chal rha ha');
// }).catch((err)=>{
//     console.log(err);
//     console.log('catch chal rha ha');
// })
























// function shaadiScnz(bankBalance) {
//     return new Promise((resolve, reject) => {
//         if (bankBalance > 1000000) {
//             resolve('Kal rasam krlainga..')
//         } else {
//             reject('rooh tumhara pass rhaigi.. AJ ka baad message mat krna.')
//         }
//     })
// }


// shaadiScnz(5000000)
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })





// axios('https://www.server.com').then((res)=>{
//     console.log(res.data);
// })
// .catch((err)=>{
//     console.log(err);
// })






// async function shaadiScnz() {
//     try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/usesrs');
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//         alert('data not found');
//     }
// }

// shaadiScnz()










// const div = document.querySelector('.container');
// axios.get('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     console.log(res.data);
//     res.data.map((item)=>{
//         div.innerHTML += `
//         <h1>Name: ${item.name}</h1>
//         <h2>Id: ${item.id}</h2>
//         <h2>city: ${item.address.city}</h2>
//         <hr/>
        
//         `
//     })

// }).catch((err)=>{
//     console.log(err);
//     alert('data not found')
// })


console.log(navigator.geolocation);



const div = document.querySelector('.container');
axios.get(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${'sasasasas'}`)
.then((res)=>{
    console.log(res.data);
    // res.data.map((item)=>{
    //     div.innerHTML += `
    //     <h1>Name: ${item.name}</h1>
    //     <h2>Id: ${item.id}</h2>
    //     <h2>city: ${item.address.city}</h2>
    //     <hr/>
        
    //     `
    // })

}).catch((err)=>{
    console.log(err);
    alert('data not found')
})





































































