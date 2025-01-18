
const colorOption = document.querySelector('.js-colorOp');
const cardColor = document.querySelector('.js-card-color');

function handleInputColor() {
    
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
    else if(colorOption.value === 'color-default'){
        cardColor.classList.add('colorOp0');
        cardColor.classList.remove('colorOp1', 'colorOp2', 'colorOp3', 'colorOp4');
    }   
}

/*color-default is shown at the beginning*/
document.addEventListener('DOMContentLoaded', () => {
    handleInputColor();
});

colorOption.addEventListener('input', handleInputColor);
