'use strict';

const btnCreate = document.querySelector('.js-create-btn');


function handleClickCreate() {
    console.log(cardData);
    fetch('https://dev.adalab.es/api/info/data', {
        method: 'POST',
        body: JSON.stringify(cardData),
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then((resp) => resp.json())
    .then((cardDataAPI) => {console.log(cardDataAPI);
        if (cardDataAPI.success) {
            console.log('success');
            localStorage.setItem('idCard', cardDataAPI.infoID);
        } else {
            //error debe llenar todos los campos
            console.log('fail');
        }
    });
}

btnCreate.addEventListener('click', handleClickCreate);