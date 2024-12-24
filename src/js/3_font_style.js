'use strict';

const fontOption = document.querySelector('.js-fontOp');
const cardFont = document.querySelector('.js-card-font');
const cardTutoring = document.querySelector('.js-card-font-item1');
const cardQueen = document.querySelector('.js-card-font-item2');
const cardDiscover= document.querySelector('.js-card-font-item3');
const cardCode = document.querySelector('.js-card-font-item4');


function handleInputFont () {

    if(fontOption.value === 'option1') {
    cardFont.classList.add('fontOp1');
    cardFont.classList.remove('fontOp0', 'fontOp2', 'fontOp3');
    cardTutoring.classList.add('fontOp1');
    cardTutoring.classList.remove('fontOp0', 'fontOp2', 'fontOp3');
    cardQueen.classList.add('fontOp1');
    cardQueen.classList.remove('fontOp0', 'fontOp2', 'fontOp3');
    cardDiscover.classList.add('fontOp1');
    cardDiscover.classList.remove('fontOp0', 'fontOp2', 'fontOp3');
    cardCode.classList.add('fontOp1');
    cardCode.classList.remove('fontOp0', 'fontOp2', 'fontOp3');
    }

    else if(fontOption.value === 'option2') {
    cardFont.classList.add('fontOp2');
    cardFont.classList.remove('fontOp0', 'fontOp1', 'fontOp3');
    }

    else if(fontOption.value === 'option3') {
    cardFont.classList.add('fontOp3');
    cardFont.classList.remove('fontOp0', 'fontOp1', 'fontOp2');
        }

    else if(fontOption.value === 'font-default') {
        cardFont.classList.add('fontOp0');
        cardFont.classList.remove('fontOp1', 'fontOp2', 'fontOp3');
    }
    
}

// Run the function on page load to ensure that the class fontOp0 is applied by default.
document.addEventListener('DOMContentLoaded', () => {
    handleInputFont();
});

fontOption.addEventListener('input', handleInputFont);