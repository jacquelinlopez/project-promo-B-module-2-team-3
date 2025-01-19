
//fieldsets
const fieldsetDesign = document.querySelector(".js-fieldset-design");
const fieldsetFill = document.querySelector(".js-fieldset-fill");
const fieldsetCreate = document.querySelector(".js-fieldset-create");
//btns
const btnDesignCol = document.querySelector('.js-design-collapse');
const btnFillCol = document.querySelector('.js-fill-collapse');
const btnCreateCol = document.querySelector('.js-create-collapse');
//spans
const spanDesign = document.querySelector(".js-arrow1");
const spanFill = document.querySelector(".js-arrow2");
const spanCreate = document.querySelector(".js-arrow3");

// handClick functions
function handleClickDesign(){
    AddClass(fieldsetDesign, 'collapsed-form');
    changeArrow(fieldsetDesign, spanDesign);
};
function handleClickFill(){
    AddClass(fieldsetFill, 'collapsed-form');
    changeArrow(fieldsetFill, spanFill);
};
function handleClickCreateCol(){
    AddClass(fieldsetCreate, 'collapsed-form');
    changeArrow(fieldsetCreate, spanCreate);
};

// addClass function
function AddClass(fieldset, clase){
        fieldset.classList.toggle(clase);
};

// changeArrow function
function changeArrow(fieldset, span){
    const isCollapsed = fieldset.classList.contains('collapsed-form');
    if(isCollapsed){
        span.innerHTML = "⪢";
    } else {
        span.innerHTML = "⩔";
    };
};

// eventListeners
btnDesignCol.addEventListener('click', handleClickDesign);
btnFillCol.addEventListener('click', handleClickFill);
btnCreateCol.addEventListener('click', handleClickCreateCol);
