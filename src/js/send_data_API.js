
const btnCreate = document.querySelector('.js-create-btn');
const linkResult = document.querySelector('.js-link-result');

function sendDataAPI (){
    fetch('https://dev.adalab.es/api/info/data', {
        method: 'POST',
        body: JSON.stringify(cardData),
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then((resp) => resp.json())
    .then((cardDataAPI) => {
        if (cardDataAPI.success) {
            localStorage.setItem('idCard', cardDataAPI.infoID);
            linkResult.classList.remove('hidden-link');
        } else {
            //error la imagen es demasiado grande
        }
    });
}

function validateTextFields() {
    const nameInput = document.getElementById('field3').value.trim();
    const tutoringInput = document.getElementById('field1').value.trim();
    const queenInput = document.getElementById('field4').value.trim();
    const curiosityInput = document.getElementById('field5').value.trim();
    const codeInput = document.getElementById('field6').value.trim();

    if(nameInput === "" || tutoringInput === "" || queenInput === "" ||curiosityInput === "" || codeInput === ""){
        return false;
    }

    return true;
}

function validateImage() {
    const imgInput = document.querySelector('.js__profile-upload-btn');
    const allowedFormats = ['image/png', 'image/jpeg'];
    
    if(!imgInput.files || imgInput.files.length === 0){
        return false; //si no se ha seleccionado imagen
    }

    const imgFile = imgInput.files[0];

    if (!allowedFormats.includes(imgFile.type)){
        //si el formato de imagen no es correcto
        alert('La imagen debe estar en formato png o jpeg.');
        return false; 
    }
    
    return true;
}

function validateSelects(){
    const colorOption = document.querySelector('.js-colorOp').value;
    const fontOption = document.querySelector('.js-fontOp').value;

    console.log(colorOption);
    console.log(fontOption);

    if(colorOption === "color-default" || fontOption === "font-default"){
        return false;
    }

    return true;
}

function handleClickCreate() {
   
    const errorMsg = 'Debe rellenar todos los campos';
    
    const isTextValid = validateTextFields();
    const isImageValid = validateImage();
    const areOptionsValid = validateSelects();
    

    if (!isTextValid || !isImageValid || !areOptionsValid) {
        alert(errorMsg);
      } else {
        sendDataAPI();
      }
    
}

btnCreate.addEventListener('click', handleClickCreate);