
const imgInput = document.querySelector('.js__profile-upload-btn')
const btnCreate = document.querySelector('.js-create-btn');
const linkResult = document.querySelector('.js-link-result');

function getDataAPI (){
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
            //añadir enlace a la página de la tarjeta definitiva
            linkResult.classList.remove('hidden-link');
        } else {
            //error debe llenar todos los campos
        }
    });
}


function handleClickCreate() {
    let valid = true;
    const errorMsg = 'Debe rellenar todos los campos';
    const allowedFormats = ['image/png', 'image/jpeg'];
    const formatMsg = 'La imagen debe estar en formato png o jpeg.';

    if(!imgInput.files || imgInput.files.length === 0){
        //si el input no está correctamente configurado o la lista de files está vacía, es decir, no hay archivos seleccionados
        valid = false;
    } else {
        if(!allowedFormats.includes(imgInput.type)){
            alert(formatMsg);
        }
    }

    if (!valid) {
        alert(errorMsg);
      } else {
        getDataAPI();
      }
    
}

btnCreate.addEventListener('click', handleClickCreate);