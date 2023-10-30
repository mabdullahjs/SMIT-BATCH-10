// const form = document.querySelector('.form');
// const city = document.querySelector('#city');
// const loading = document.querySelector('#loading');
// const weather = document.querySelector('.weather');



// form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     loading.className = 'mt-5 text-center text-white'
//     weather.innerHTML = ''

//     try {
//         const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}`)
//         console.log(res.data);
//         weather.innerHTML = `
//         <div class="mt-[4rem] mx-[5rem] p-5 bg-[#38bdf8] text-white rounded-xl">
//         <h1 class="text-4xl">city: ${res.data.location.name}</h1>
//         <h1 class="text-4xl">Temperature: ${res.data.current.temp_c}</h1>
//         </div>
//         `
//     } catch (error) {
//         weather.innerHTML = `
//         <div class='text-center text-white text-3xl mt-[4rem]'>
//         Data Not Found!
//         </div>
//         `;
//     } finally {
//         loading.className = 'mt-5 text-center text-white hidden'
//         city.value = ''
//     }
// })


const form = document.querySelector('.form');
const city = document.querySelector('#city');
const loading = document.querySelector('#loading');
const weather = document.querySelector('.weather');


let obj;
// //b91dd222bbd54278a82017a30d38b181
axios.get(`https://newsapi.org/v2/everything?q=cricket&apiKey=yourapikey`).then((res) => {
    obj = res.data.articles;
    console.log(res.data.articles); 
    res.data.articles.forEach((news , index) => {
        weather.innerHTML += `
        <div class='text-white p-5 mt-5' onclick='saveData(${index})'>
        <h1>${news.title}</h1>
        <p>${news.content}</p>
        </div> <hr/>

        `
    });
}).catch((err) => {
    console.log(err);
})



function saveData (index){
    console.log(obj[index]);
}