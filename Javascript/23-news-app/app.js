

//form validation

//regex


// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const btn = document.querySelector('#btn');


// btn.addEventListener('click', () => {
//     // if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) && !password.value.match(/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*\d).{8,}$/
//     // )){
//     //     console.log('incorrect correct email and password');
//     // }else{
//     //     console.log('correct email and password');
//     // }

// })





let allNews;
const div = document.querySelector('.container');
function renderNews() {
    allNews.forEach((item) => {
        div.innerHTML += ` <div class="card mt-3" style="width: 18rem;">
        <img src="${item.urlToImage ? item.urlToImage : 'https://c.ndtvimg.com/2018-12/m6qdlvuo_nawaz-sharif-pti_625x300_30_December_18.jpg'}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
    })
}
async function getNews() {
    try {
        const news = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=b91dd222bbd54278a82017a30d38b181`);
        const res = await news.json()
        console.log(res.articles);
        allNews = res.articles;
        renderNews();
    } catch (error) {
        console.log(error);
    }
}

getNews()







// const bankBalance = 100000;

// if(bankBalance > 200000){
//     console.log('istekhara ma han agaya ha');
// }else{
//     console.log('rooh tumhara pass ha...');
// }

// bankBalance > 200000 ? console.log('istekhara ma han agaya ha') ;











































