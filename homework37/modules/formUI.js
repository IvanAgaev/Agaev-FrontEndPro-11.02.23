export const removeValidClass = () => {
    const inputsCollection = document.querySelectorAll("input,textarea");
    inputsCollection.forEach(input => {
        input.classList.remove("is-valid");
    });
};

export const showError = (input, message) => {
    const formField = input.parentElement;
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    const error = formField.querySelector("#emailHelp");
    error.textContent = message;
    error.style.color = "red";
};

export const showSuccess = (input) => {
    const formField = input.parentElement;
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    const error = formField.querySelector('#emailHelp');
    error.textContent = '';
};