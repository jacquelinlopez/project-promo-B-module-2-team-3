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
    if (fieldset.classList.contains("collapsed")) {
        span.innerHTML = "⪢";
    } else {
        span.innerHTML = "⩔";
    }
}

function handleClickDesign() {
    fieldsetDesign.classList.toggle("collapsed");
    changeArrow(fieldsetDesign, span1);
}
function handleClickFill() {
    fieldsetFill.classList.toggle("collapsed");
    changeArrow(fieldsetFill, span2);
}
function handleClickCreate() {
    fieldsetCreate.classList.toggle("collapsed");
    changeArrow(fieldsetCreate, span3);
}

designCollapse.addEventListener("click", handleClickDesign);
fillCollapse.addEventListener("click", handleClickFill);
createCollapse.addEventListener("click", handleClickCreate);
