'use strict';

const menuToggle = document.querySelector('js-hamburger');
const menuList = document.querySelector('js-menu');

menuToggle.addEventListener('click', ()=>{
    menuList.classList.toggle('collapsed');
});