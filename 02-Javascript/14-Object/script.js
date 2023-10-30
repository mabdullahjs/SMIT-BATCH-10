// console.log('hello objects');


// const arr = ['blue', 'green'];
// console.log(arr[])

// const obj = {
//     name: 'Muhammad Abdullah',
//     email: 'mabdullah2037@gmail.com',
//     age: 20,
// }

// console.log(obj.name)
// console.log(obj.email)
// console.log(obj.age)






















// const user = {
//     name:'Muhammad Abdullah',
//     age:20,
//     loggedIn:['monday' , 'tuesday'],
//     greetUser: function (){
//         console.log('hello user')
//     }
// }

// console.log(user['full name']);


// user.greetUser()
// // console.log(user.greetUser());



// const greet = function (){
//     console.log('greeet user abc');
// }

// greet()



































// const car = {
//     name: 'Civic',
//     brand: 'Honda',
//     model: 2021,
//     colour: 'white',
//     accesories:['frontBumper' , 'mirror']
// }
// console.log(car);
// // Object.freeze(car);
// car.brand = 'Toyota';
// console.log(car);




























const gymMembership = {
    gymName: 'Fitness Plus',
    fees: 2500,
    discount: function (members) {
        let userDiscount;
        if (members >= 2) {
            userDiscount = 20
            console.log('userDiscount===>', userDiscount);
            this.fees = this.fees - (this.fees * userDiscount / 100);
        } else {
            userDiscount = 5
            console.log('userDiscount===>', userDiscount);
            this.fees = this.fees * userDiscount / 100;
        }


    }

}

// gymMembership.discount(3)
console.log(gymMembership.discount(3))



const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel'
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel'
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel'
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel'
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel'
    },

]

 console.log(phones[1].brand);

























