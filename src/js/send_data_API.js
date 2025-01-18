
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


function handleClickCreate() {
    let valid = true;
    const errorMsg = 'Debe rellenar todos los campos';
    const allowedFormats = ['image/png', 'image/jpeg'];
    const formatMsg = 'La imagen debe estar en formato png o jpeg.';

    //recoger los inputs
    const nameInput = document.getElementById('field3').value.trim();
    const tutoringInput = document.getElementById('field1').value.trim();
    const queenInput = document.getElementById('field4').value.trim();
    const curiosityInput = document.getElementById('field5').value.trim();
    const codeInput = document.getElementById('field6').value.trim();
    
    //validarlos
    if(nameInput === "" || tutoringInput === "" || queenInput === "" ||curiosityInput === "" || codeInput === ""){
        valid = false;
    }

    const imgInput = document.querySelector('.js__profile-upload-btn');
    
    if(!imgInput.files || imgInput.files.length === 0){
        valid = false;
    } else {
        const imgFile = imgInput.files[0];
        if (!allowedFormats.includes(imgFile.type)){
            valid = false;
            alert(formatMsg); 
        }
    }


    if (!valid) {
        alert(errorMsg);
      } else {
        sendDataAPI();
      }
    
}

btnCreate.addEventListener('click', handleClickCreate);