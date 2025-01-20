'use strict';

let card = {};

const tutoring = document.querySelector('.js-preview-tutoring');
const queen = document.querySelector('.js-preview-queen');
const discover = document.querySelector('.js-preview-discover'); 
const code = document.querySelector('.js-preview-code');
const img = document.querySelector('img');
const h3 = document.querySelector('h3');
const cardColor = document.querySelector('.js-card-color');

//Petición a servidor
const idLS = localStorage.getItem('idCard');
fetch(`https://dev.adalab.es/api/info/${idLS}`)
.then((resp)=>resp.json())
.then((info)=>{
    card = info.data;
    renderData();
    const socialMediaLink = encodeURI(window.location.href);
    const socialMediaMsg = encodeURI('Mira mi tarjeta Adalaber');
    const socialMediaTitle = encodeURIComponent('Ms. Adalaber');
    
    const fb = document.querySelector('.facebook');
    fb.href = `https://www.facebook.com/share.php?u=${socialMediaLink}`;
    
    const twitter = document.querySelector('.twitter');
    twitter.href = `http://twitter.com/share?&url=${socialMediaLink}&text=${socialMediaMsg}&hashtags=adalab`;
});

//Pintar datos en el HTML
function selectColor(){
    if(card.field2 === 'option1') {
        cardColor.classList.add('colorOp1');
    }
    else if(card.field2 === 'option2') {
        cardColor.classList.add('colorOp2');
    }
    else if(card.field2 === 'option3') {
        cardColor.classList.add('colorOp3');
    }
    else if(card.field2 === 'option4') {
        cardColor.classList.add('colorOp4');
    }
};

function selectFont(){
    if(card.field7 === 'option1') {
        cardColor.classList.add('fontOp1');
    }
    else if(card.field7 === 'option2') {
        cardColor.classList.add('fontOp2');
    }
    else if(card.field7 === 'option3') {
        cardColor.classList.add('fontOp3');
    }
    else if(card.field7 === 'font-default') {
        cardColor.classList.add('fontOp0');
    }
};

function renderData(){
    img.src = card.photo;
    h3.innerHTML = card.field3;
    tutoring.innerHTML = card.field1;
    queen.innerHTML = card.field4;
    discover.innerHTML = card.field5;
    code.innerHTML = card.field6;
    selectColor();
    selectFont();
};



//crear funciones color y fuente
