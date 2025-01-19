const menuToggle = document.querySelector('.js-hamburger');
const menuList = document.querySelector('.js-menu');

menuToggle.addEventListener('click', (event)=>{
    event.preventDefault();
    menuList.classList.toggle('collapsed');
   
});