const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]
const div = document.querySelector('.containers');


for (let i = 0; i < phones.length; i++) {
    // //console.log(phones[i]);
    div.innerHTML += `
    <div class="p-[2rem] border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl">
            <p><span class="font-bold text-lg">brand:</span> ${phones[i].brand}</p>
            <p><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
            <p><span class="font-bold text-lg">RAM:</span> ${phones[i].ram}</p>
            <p><span class="font-bold text-lg">ROM:</span> ${phones[i].rom}</p>
            <p><span class="font-bold text-lg">Camera:</span> ${phones[i].camera}</p>
            <p><span class="font-bold text-lg">Price:</span> ${phones[i].price}</p>
            <button onclick='addToCart(${i})' class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]">Add to Cart</button>
    </div>
    `

}

const cartData = localStorage.getItem('cartItem');
const jsonData = JSON.parse(cartData);

let cartArr;
if(Array.isArray(jsonData)){
    cartArr = [...jsonData]

}else{
    cartArr = []
}




// add to cart function


function addToCart(index) {
    // //console.log('includes in array ==>', cartArr.includes(phones[index]));
    if (cartArr.includes(phones[index])) {
        //console.log('mujood ha');
        for (let i = 0; i < cartArr.length; i++) {
            if (cartArr[i] === phones[index]) {
                cartArr[i].quantity += 1
            }
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item quantity updated successfully',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        //console.log('mujood NAHI ha');
        phones[index].quantity = 1
        cartArr.push(phones[index]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item added to cart successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
    //console.log(cartArr);
}






//goto cart function

function goToCart() {
    const cart = JSON.stringify(cartArr);
    localStorage.setItem('cartItem' , cart);
    //console.log('cart called');
    window.location = 'cart.html';
}