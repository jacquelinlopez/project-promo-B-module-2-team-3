'use strict';

import './1_color_themes.js';
import './menu.js';

const cardData = {
    field1: 0, //tutoria
    field2: "",//color
    field3: "",//nombre
    field4: "",//reina
    field5: "",//curiosidad
    field6: "",//código
    //field7: "",
    photo: "" //foto
};

const form = document.querySelector('.js-form');
const previewImg = document.querySelector('.js-preview-img');
const previewTitle = document.querySelector('.js-preview-title');
const previewTutoring = document.querySelector('.js-preview-tutoring');
const previewQueen = document.querySelector('.js-preview-queen');
const previewDiscover = document.querySelector('.js-preview-discover');
const previewCode = document.querySelector('.js-preview-code');

function render(){
    //color
    //img
    previewTitle.innerHTML = cardData.field3;
    previewTutoring.innerHTML = cardData.field1;
    previewQueen.innerHTML = cardData.field4;
    previewDiscover.innerHTML = cardData.field5;
    previewCode.innerHTML = cardData.field6;
}

function handleForm(ev){
    const id = ev.target.id;
    const value = ev.target.value;
    
    cardData[id] = value;
    render();
};

form.addEventListener('input', handleForm);


