"use strict";
const designCollapse = document.querySelector(".js-design-collapse");
const fillCollapse = document.querySelector(".js-fill-collapse");
const createCollapse = document.querySelector(".js-create-collapse");
const span1 = document.querySelector(".js-arrow1");
const span2 = document.querySelector(".js-arrow2");
const span3 = document.querySelector(".js-arrow3");
const fieldsetDesign = document.querySelector(".js-fieldset-design");
const fieldsetFill = document.querySelector(".js-fieldset-fill");
const fieldsetCreate = document.querySelector(".js-fieldset-create");

function changeArrow(fieldset, span) {
    if (fieldset.classList.contains("collapsed-form")) {
        span.innerHTML = "⪢";
    } else {
        span.innerHTML = "⩔";
    }
}

function handleClickDesign(ev) {
    ev.preventDefault();
    fieldsetDesign.classList.toggle(".collapsed-form");
    changeArrow(fieldsetDesign, span1);
}
function handleClickFill(ev) {
    ev.preventDefault();
    fieldsetFill.classList.toggle(".collapsed-form");
    changeArrow(fieldsetFill, span2);
}
function handleClickCreate(ev) {
    ev.preventDefault();
    fieldsetCreate.classList.toggle(".collapsed-form");
    changeArrow(fieldsetCreate, span3);
}

designCollapse.addEventListener("click", handleClickDesign);
fillCollapse.addEventListener("click", handleClickFill);
createCollapse.addEventListener("click", handleClickCreate);
