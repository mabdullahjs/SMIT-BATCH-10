

const submit = document.getElementById('submit');


// function greetUser (){
//     console.log('Hello abdullah');
// }

// submit.addEventListener('click' , function(event){
//     console.log(event.target.parentNode);

// })





const images = document.querySelector('.images');
const image2 = document.querySelector('#image-2');


images.addEventListener('click', function (event) {
    console.log('ul called');
    if (event.target.tagName === 'IMG') {
        const removeItem = event.target;
        console.log(removeItem.parentNode);
        removeItem.parentNode.remove()
    }
})

image2.addEventListener('mouseout', function (e) {
    // e.stopPropagation()
    console.log('image 3 clicked');
})


const link = document.getElementById('link-1');

link.addEventListener('click', function (e) {
    e.preventDefault()

})