'use strict';

const btnCreate = document.querySelector('.js-create-btn');
const cardData = {
    field1: 0, //tutoria
    field2: "",//color
    field3: "",//nombre
    field4: "",//reina
    field5: "",//curiosidad
    field6: "",//código
    field7: "", //font
    photo: "" //foto
};

function handleClickCreate() {
    fetch('https://dev.adalab.es/api/info/data', {
        method: 'POST',
        body: JSON.stringigy(cardData),
    })
     .then((resp) => resp.json())
     .then((cardData) => {
        if (cardData.success) {
            localStorage.setItem('idCard', cardData.infoID);
        } else {
            //error debe llenar todos los campos
        }
     })
}

btnCreate.addEventListener('click', handleClickCreate);