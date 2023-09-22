// console.log(document.childNodes[1].childNodes[2].childNodes);
// const h1 = document.getElementsByTagName('h1')[5];
// const h1 = document.querySelector('h1');
// const h1 = document.querySelectorAll('h1');
// const h1 = document.getElementById('head');
// const h1 = document.getElementsByClassName('main-head')[1];
// h1.innerHTML = 'Changed using js'
// console.log(h1);


// const parent = document.querySelector('.parent');
// // console.log(parent);
// // const children = parent.children[2];
// // const children = parent.firstElementChild;
// const children = parent.lastElementChild;
// children.innerHTML = 'changed through children property'
// console.log(children);



// const para = document.querySelector('#para');
// para.childNodes[1].innerHTML = 'changed through dom';






// var kidNode = document.getElementById("div2");
// var pNode = kidNode.parentNode;
// console.log(pNode);





// var firstEl = document.getElementById("div1");
// // console.log(firstEl.nodeName);


// const div = document.createElement('div');
// // div.className = 'main-div'
// div.id = 'main-divs'
// // div.setAttribute('class' , "abcdf")
// const text = document.createTextNode('abcdedgh');
// div.appendChild(text)
// // div.innerHTML = `<div>abcdef</div>`
// console.log(div);
// parent.appendChild(div)


const parent = document.querySelector('.parent');
const div = document.createElement('DIV');
div.className = 'main-head'
div.style.backgroundColor = 'red'
div.style.padding = '100px'
const text = document.createTextNode('create div using dom methods');
div.appendChild(text);
console.log(div);
parent.appendChild(div);

























