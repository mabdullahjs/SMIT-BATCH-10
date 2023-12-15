// console.log('hello world');
// console.log(abdullah);

// function hello() {
//     let fruits = ['orange', 'mango', 'banana', 'apple'];
//     fruits.splice(1, 1);
//     hello2(fruits)
//     console.log(fruits);

// }

// function hello2(fruits) {
//     fruits.splice(2, 1);
// }

// hello()



// ['orange', 'mango', 'banana', 'apple'];
// ['orange, 'banana', 'apple'];
// ['orange' , 'apple']
// ['orange']
// ['banana']
// ['mango']
// error
// undefined








// console.log(str1);
// console.log(str2);
// console.log(str3);
// var str1 = 'hello';
// let str2 = 'hello2';
// const str3 = 'hello3';






















// if(true){
//     var str = 'abc';
//     let str2 = 'cde';
// }

// console.log(str);
// console.log(str2);






























// const num1 = 10;
// console.log(num1 ** 3);

// function hello(){
//     let h1 = 'abc';
//     // console.log(h2);
//     function hello2(){
//         let h2 = 'cde';
//         console.log(h1);
//     }
//     hello2()
// }


// hello()



const productCart = [
    {
        productName: "Product 1",
        price: 10.99
    },
    {
        productName: "Product 2",
        price: 19.99
    },
    {
        productName: "Product 3",
        price: 8.50
    },
    {
        productName: "Product 4",
        price: 12.00
    },
    {
        productName: "Product 5",
        price: 15.75
    },
    {
        productName: "Product 6",
        price: 6.99
    },
    {
        productName: "Product 7",
        price: 24.50
    },
    {
        productName: "Product 8",
        price: 17.25
    },
    {
        productName: "Product 9",
        price: 11.49
    },
    {
        productName: "Product 10",
        price: 14.99
    }
];




// let product = productCart.map((item)=>{
//     return item.price + 10
// }).filter((item)=>{
//     return item > 20
// }).reduce((acc , currentVal)=>{
//     return acc + currentVal
// })
// console.log(product);






























const arr = [1, 2, 3, 4, 5, 6, 7];

const sum = arr.reduce((accumulator , currentVal)=>{
    console.log(`accumulator ==> ${accumulator}`);
    console.log(`current Value ==> ${currentVal}`);
    return accumulator + currentVal
} , 0)

console.log(sum);








































