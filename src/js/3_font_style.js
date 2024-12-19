'use strict';

const fontOption = document.querySelector('.js-fontOp');
const cardFont = document.querySelector('.js-card-font');

function handleInputFont (event) {

    if(fontOption.value === 'option1') {
    cardFont.classList.add('fontOp1');
    cardFont.classList.remove('fontOp2', 'fontOp3');
    }

    else if(fontOption.value === 'option2') {
    cardFont.classList.add('fontOp2');
    cardFont.classList.remove('fontOp1', 'fontOp3');
    }

    else if(fontOption.value === 'option3') {
    cardFont.classList.add('colorOp3');
    cardFont.classList.remove('fontOp1', 'fontOp3');
        }
    
}

fontOption.addEventListener('input', handleInputFont);