'use strict';

const fontOption = document.querySelector('.js-fontOp');
const cardFont = document.querySelector('.js-card-font');

function handleInputFont () {

    if(fontOption.value === 'option1') {
    cardFont.classList.add('fontOp1');
    cardFont.classList.remove('fontOp0', 'fontOp2', 'fontOp3');
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

document.addEventListener('DOMContentLoaded', () => {
    handleInputFont();
});

fontOption.addEventListener('input', handleInputFont);