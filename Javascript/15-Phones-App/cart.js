function goToHome() {
    window.location = 'index.html'
}


const data = localStorage.getItem('cartItem');
const cartArr = JSON.parse(data);
console.log(cartArr);

const div = document.querySelector('#main-div');


function renderCart() {
    for (let i = 0; i < cartArr.length; i++) {
        div.innerHTML += `
        <div class="p-[2rem] border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl mt-5">
                <p><span class="font-bold text-lg">brand:</span> ${cartArr[i].brand}</p>
                <p><span class="font-bold text-lg">Model:</span> ${cartArr[i].model}</p>
                <p><span class="font-bold text-lg">Quantity:</span> ${cartArr[i].quantity}</p>
                <p><span class="font-bold text-lg">Price:</span> ${cartArr[i].price}</p>
                <p><span class="font-bold text-lg">Total Price:</span> ${cartArr[i].price * cartArr[i].quantity}</p>
                <button class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="increaseQuantity(${i})">+</button>
                <span>${cartArr[i].quantity}</span>
                <button class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="decreaseQuantity(${i})">-</button> <br/>
                <button  class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="deleteItem(${i})">Delete</button>
        </div>
        `
    }
}

renderCart()

function increaseQuantity (index){
    div.innerHTML = ''
    console.log(cartArr[index])
    cartArr[index].quantity += 1
    renderCart()
}
function decreaseQuantity (index){
    div.innerHTML = ''
    console.log(cartArr[index])
    cartArr[index].quantity -= 1
    renderCart()
    if(cartArr[index].quantity === 0){
        div.innerHTML = ''
        cartArr.splice(index , 1)
        renderCart()
    }
}


function deleteItem(index){
    div.innerHTML = '';
    cartArr.splice(index , 1);
    renderCart()
}