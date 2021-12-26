//modals
const searchForm=document.querySelector('.search-form');
const shopcart=document.querySelector('.shopping-cart');
const logform=document.querySelector('.login-form');
const navbar=document.querySelector('.navbar');
const modals = [searchForm,shopcart,logform,navbar];

//toggle modals when clicking on one of them
function toggleModals(activeModal){
    modals.forEach(modal=>modal==activeModal ? 
        modal.classList.toggle('active') :
        modal.classList.remove('active'))
}

//btns
document.querySelector('#search-btn').onclick = () =>toggleModals(searchForm);
document.querySelector('#cart-btn').onclick = ()=>toggleModals(shopcart);
document.querySelector('#login-btn').onclick = ()=>toggleModals(logform);
document.querySelector('#menu-btn').onclick = ()=>toggleModals(navbar);

//scrolling
window.onscroll=()=>{
    logform.classList.remove('active');
    searchForm.classList.remove('active');
    shopcart.classList.remove('active');
    navbar.classList.remove('active');
}

//slider - select slides
let slides = document.querySelectorAll('.home .slides-container .slide');
let index=0;

//slider (true = right, false = left)
function slide(direction){
    slides[index].classList.remove('active');
    index=direction ? 
        (index+1)%slides.length : 
        (index-1+slides.length)%slides.length;
    slides[index].classList.add('active');
}