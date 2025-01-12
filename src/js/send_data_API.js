'use strict';

const btnCreate = document.querySelector('.js-create-btn');
const linkResult =document.querySelector('.js-link-result');

function renderLink (){
    linkResult.classList.remove('hidden-link');
}

function handleClickCreate() {
    fetch('https://dev.adalab.es/api/info/data', {
        method: 'POST',
        body: JSON.stringify(cardData),
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then((resp) => resp.json())
    .then((cardDataAPI) => {
        if (cardDataAPI.success) {
            localStorage.setItem('idCard', cardDataAPI.infoID);
            //añadir enlace a la página de la tarjeta definitiva
                renderLink();
        } else {
            //error debe llenar todos los campos
            console.log('error');
        }
    });
}

btnCreate.addEventListener('click', handleClickCreate);