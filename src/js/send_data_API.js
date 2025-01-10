'use strict';

const btnCreate = document.querySelector('.js-create-btn');


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
        } else {
            //error debe llenar todos los campos
        }
    });
}

btnCreate.addEventListener('click', handleClickCreate);