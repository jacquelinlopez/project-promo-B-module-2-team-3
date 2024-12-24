'use strict';

const colorOption = document.querySelector('.js-colorOp');
const cardColor = document.querySelector('.js-card-color');

function handleInputColor (event) {
    // const id = event.target.id;
    // const value = event.target.value;

    // console.log(target);

    // console.log(value);

    if(colorOption.value === 'option1') {
    cardColor.classList.add('colorOp1');
    cardColor.classList.remove('colorOp0','colorOp2', 'colorOp3', 'colorOp4');
    }

    else if(colorOption.value === 'option2') {
    cardColor.classList.add('colorOp2');
    cardColor.classList.remove('colorOp0','colorOp1', 'colorOp3', 'colorOp4');
    }

    else if(colorOption.value === 'option3') {
    cardColor.classList.add('colorOp3');
    cardColor.classList.remove('colorOp0','colorOp1', 'colorOp2', 'colorOp4');
        }
    else if(colorOption.value === 'option4') {
        cardColor.classList.add('colorOp4');
        cardColor.classList.remove('colorOp0','colorOp1', 'colorOp2', 'colorOp3');
        }
    else {
        cardColor.classList.add('colorOp0');
        cardColor.classList.remove('colorOp1', 'colorOp2', 'colorOp3', 'colorOp4');
    }
    
}

colorOption.addEventListener('input', handleInputColor);
