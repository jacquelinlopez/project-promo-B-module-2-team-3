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
const color = document.querySelector('.js-card-color');
const font = document.querySelector('.js-card-font');

previewImg.src = `https://img.freepik.com/vector-gratis/linda-chica-hacker-operando-laptop-dibujos-animados-vector-icono-ilustracion-personas-tecnologia-aislada-plana_138676-9487.jpg`;
previewTitle.innerHTML = `Ms.Adalaber`;
previewTutoring.innerHTML = `1`;
previewQueen.innerHTML = ``;
previewDiscover.innerHTML = ``;
previewCode.innerHTML = `CODE`;

function render(){
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


function resetColor (){
    color.classList.add('colorOp0');
    color.classList.remove('colorOp1', 'colorOp2', 'colorOp3', 'colorOp4');
}

function resetFont (){
    font.classList.add('fontOp0');
    font.classList.remove('fontOp1', 'fontOp2', 'fontOp3');
}

function handleClick (){
    previewImg.src = `https://img.freepik.com/vector-gratis/linda-chica-hacker-operando-laptop-dibujos-animados-vector-icono-ilustracion-personas-tecnologia-aislada-plana_138676-9487.jpg`;

    //Vaciamos campos
    previewTitle.innerHTML = '';
    previewTutoring.innerHTML = '';
    previewQueen.innerHTML = '';
    previewDiscover.innerHTML = '';
    previewCode.innerHTML = '';

    //Vaciamos datos guardados
    cardData.field1 = '';
    cardData.field3 = '';
    cardData.field4 = '';
    cardData.field5 = '';
    cardData.field6 = '';

    
    resetColor();
    resetFont();
    
};

resetButton.addEventListener('click', handleClick);