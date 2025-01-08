'use strict';
import './menu.js';
import './1_color_themes.js';
import './2_landing.js';
import './3_font_style.js';
import './4_image.js';

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

const form = document.querySelector('.js-form');
const previewImg = document.querySelector('.js-preview-img');
const previewTitle = document.querySelector('.js-preview-title');
const previewTutoring = document.querySelector('.js-preview-tutoring');
const previewQueen = document.querySelector('.js-preview-queen');
const previewDiscover = document.querySelector('.js-preview-discover');
const previewCode = document.querySelector('.js-preview-code');
const resetButton = document.querySelector('.js-reset');

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


function handleClick (){
    previewImg.src = `https://img.freepik.com/vector-gratis/linda-chica-hacker-operando-laptop-dibujos-animados-vector-icono-ilustracion-personas-tecnologia-aislada-plana_138676-9487.jpg`;
    previewTitle.innerHTML = ``;
    previewTutoring
}

resetButton.addEventListener('click', handleClick)