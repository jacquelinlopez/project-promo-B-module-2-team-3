"use strict";
const fieldsetDesign = document.querySelector(".js-fieldset-design");
const fieldsetFill = document.querySelector(".js-fieldset-fill");
const fieldsetCreate = document.querySelector(".js-fieldset-create");
const btnDesignCol = document.querySelector('.js-design-collapse');
const btnFillCol = document.querySelector('.js-fill-collapse');
const btnCreateCol = document.querySelector('.js-create-collapse');

function handleClickDesign(){
    AddClass(fieldsetDesign, 'collapsed-form');
};
function handleClickFill(){
    AddClass(fieldsetFill, 'collapsed-form');
};
function handleClickCreateCol(){
    AddClass(fieldsetCreate, 'collapsed-form');
};

function AddClass(tag, clase){
        tag.classList.toggle(clase);
};

btnDesignCol.addEventListener('click', handleClickDesign);
btnFillCol.addEventListener('click', handleClickFill);
btnCreateCol.addEventListener('click', handleClickCreateCol);
