

// var
// redeclare true
// reassign true

// let
// redeclare false
// reassign true

// const
// redeclare false
// reassign false


// var name1 = 'abdullah'; 
// var name1 = 'abd';
// name1 = 'a';
// console.log(name1);

// let name2 = 'abdullah' ;
// name2 = 'abdullah';
// console.log(name2);

// const name3 = 'abdullah3'
// console.log(name3);




// function greetUser(){
//     if(true){
//         const names = 'abdullah';
//         console.log(`hello ${names}`);
//     }
//     console.log(names);
// }

// greetUser()










// template literals

// var names = 'abdullah'
// console.log('my name is ' + names);
// console.log(`my name is ${names}`);



//ternary operators

// var bankBalance = 20000;
// if(bankBalance > 400000){
//     console.log('shaadi mubarak');
// }else{
//     console.log('istekhara ma naa aya ha ammi zehr kha laingi.');
// }

// bankBalance > 400000 ? console.log('shaadi mubarak') : console.log('ammi na zehr khalia');





// bankBalance > 400000 ? console.log('shaadi mubarak') : bankBalance > 200000 ? console.log('abba nahi maan rha.'): console.log('larka acha ha');



// spread operators

// const arr = [1, 2, 4, 5, 6];
// const arr2 = [...arr, 7, 8, 9];
// console.log(arr2);


// function sumVal(...num) {
//     console.log(num);
// }
// sumVal(1,2,3,4,5,6,7,8,9);


// object destructuring

let obj = {
    name: 'abdullah',
    email: 'mabdullah2037@gmail.com',
    age: 20
}

//function ({name}){
//     name
// }

// let {name:n , age} = obj
// console.log(age);


//array
// const arr = [1, 2, 3, 4, 5, 6, 8, ['abdullah', 'abc', true]];
// const [name , age , , , , , , [arr1 , b]] = arr
// console.log(b);




// lexical scoping

// function outerFunction(){
//     let a = 10;
//     console.log(betaKiJaidaad);
//     function innerFunction(){
//         let betaKiJaidaad = 2
//         console.log(a);
//     }
//     function innerFunction2(){
//         console.log(betaKiJaidaad);
//         console.log(a);
//     }
//     innerFunction()
//     innerFunction2()
// }

// outerFunction()




//modulus

function greetUser(name) {
    return `hello ${name}`;
}
function greetUser1(name) {
    return `hello ${name}`;
}
function greetUser2(name) {
    return `hello ${name}`;
}
function greetUser3(name) {
    return `hello ${name}`;
}
function greetUser4(name) {
    return `hello ${name}`;
}


let names = 'abdullah';

export { greetUser, greetUser1, greetUser2, greetUser3, greetUser4 }


export default names

















































