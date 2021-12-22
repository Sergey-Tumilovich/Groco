//search form (TODO: move onclick to html and do ONE function)
let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    logform.classList.remove('active');
    searchForm.classList.toggle('active');
    shopcart.classList.remove('active');
    navbar.classList.remove('active');
}

//SUBJECT TO REMOVE: shopping card modal
let shopcart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = ()=>{
    logform.classList.remove('active');
    searchForm.classList.remove('active');
    shopcart.classList.toggle('active');
    navbar.classList.remove('active');
}

let logform=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = ()=>{
    logform.classList.toggle('active');
    searchForm.classList.remove('active');
    shopcart.classList.remove('active');
    navbar.classList.remove('active');
}

//same for menu opening on phone
let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    logform.classList.remove('active');
    searchForm.classList.remove('active');
    shopcart.classList.remove('active');
    navbar.classList.toggle('active');
}

//scrolling
//TODO: remove 'active' from all modals
//from modals or event listener
window.onscroll=()=>{
    logform.classList.remove('active');
    searchForm.classList.remove('active');
    shopcart.classList.remove('active');
    navbar.classList.remove('active');
}

//TODO: make a separate function for a slider
let slides = document.querySelectorAll('.home .slides-container .slide');
let index=0;
//TODO: make prev and next as one function(direction)
function next(){
    slides[index].classList.remove('active');
    index=(index+1)%slides.length;
    slides[index].classList.add('active');
}
//also because of toggle you don't need add/remove
function prev(){
    slides[index].classList.remove('active');
    index=(index-1+slides.length)%slides.length;
    slides[index].classList.add('active');
}