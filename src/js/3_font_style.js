'use strict';

const fontOption = document.querySelector('.js-fontOp');
const cardFont = document.querySelectorAll('.js-card-font');  

function handleInputFont() {
    
    for (let index in cardFont) { // Checks if the property is a numeric index (must be a node of a NodeList).
        if (cardFont.hasOwnProperty(index)) {
            cardFont[index].classList.remove('fontOp0', 'fontOp1', 'fontOp2', 'fontOp3');
        }
        //The hasOwnProperty() method returns a boolean indicating whether the object has the specified property.
    }

    if (fontOption.value === 'option1') {
        for (let index in cardFont) {
            if (cardFont.hasOwnProperty(index)) {
                cardFont[index].classList.add('fontOp1');
            }
        }
    } else if (fontOption.value === 'option2') {
        for (let index in cardFont) {
            if (cardFont.hasOwnProperty(index)) {
                cardFont[index].classList.add('fontOp2');
            }
        }
    } else if (fontOption.value === 'option3') {
        for (let index in cardFont) {
            if (cardFont.hasOwnProperty(index)) {
                cardFont[index].classList.add('fontOp3');
            }
        }
    } else if (fontOption.value === 'font-default') {
        for (let index in cardFont) {
            if (cardFont.hasOwnProperty(index)) {
                cardFont[index].classList.add('fontOp0');
            }
        }
    }
};

// Run the function on page load to ensure that the class fontOp0 is applied by default.
document.addEventListener('DOMContentLoaded', () => {
    handleInputFont();
});

fontOption.addEventListener('input', handleInputFont);


