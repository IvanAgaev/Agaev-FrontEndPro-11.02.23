import { getCaptionElement, getControlElement, getFieldElement } from "./getFormElements.js";
export const removeValidClass = () => {
    const inputsCollection = document.querySelectorAll("input,textarea");
    inputsCollection.forEach(input => {
        input.classList.remove("is-valid");
    });
};

export const showError = (fieldName, message) => {
    const formField = getFieldElement(fieldName);
    const formControl = getControlElement(fieldName);
    const formCaption = getCaptionElement(fieldName);

    formControl.classList.remove("is-valid");
    formControl.classList.add("is-invalid");
    formCaption.textContent = message;
    formCaption.style.color = "red";
};

export const showSuccess = (fieldName, message = "") => {
    const field = getFieldElement(fieldName);
    const control = getControlElement(fieldName);
    const caption = getCaptionElement(fieldName);

    control.classList.remove("is-invalid");
    control.classList.add("is-valid");

    caption.textContent = '';
};