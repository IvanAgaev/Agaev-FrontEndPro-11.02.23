const validationFunctions = {
    isRequired: value => value === "" ? false : true,
    isBetween: (length, min, max) => length < min || length > max ? false : true,

    isDateOfBirth: (date) => {
        const re = new RegExp("^((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))/(0[1-9])|(1[0-2])$");
        return re.test(date);
    },

    removeValidClass: () => {
        const inputsCollection = document.querySelectorAll("input,textarea");
        inputsCollection.forEach(input => {
            input.classList.remove("is-valid");
        });
    },

    showError: (input, message) => {
        const formField = input.parentElement;
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        const error = formField.querySelector("#emailHelp");
        error.textContent = message;
        error.style.color = "red";
    },

    showSuccess: (input) => {
        const formField = input.parentElement;
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        const error = formField.querySelector('#emailHelp');
        error.textContent = '';
    },

    checkUserName: () => {
        let valid = false;
        const userNameEl = document.getElementById("username");
        const userName = userNameEl.value.trim();
        if (!isRequired(userName)) {
            showError(userNameEl, "Поле має бути заповненим");
        } else if (!isBetween(userName.length, 4, 30)) {
            showError(userNameEl, "Поле має містити від 4 до 30 символів");
        } else {
            valid = true;
            showSuccess(userNameEl);
        }
        return valid;
    },

    checkDateOfBirth: () => {
        let valid = false;
        const dateOfBirthEl = document.getElementById("dateOfBirth");
        const dateOfBirth = dateOfBirthEl.value.trim();
        if (!isRequired(dateOfBirth)) {
            showError(dateOfBirthEl, "Поле має бути заповненим");
        } else if (!isDateOfBirth(dateOfBirth)) {
            showError(dateOfBirthEl, "День народження має бути у форматі день/місяць(14/03)");
        } else {
            valid = true;
            showSuccess(dateOfBirthEl);
        }
        return valid;
    },

    checkAddress: () => {
        let valid = false;
        const addressEl = document.getElementById("address");
        const address = addressEl.value.trim();
        if (!isRequired(address)) {
            showError(addressEl, "Поле має бути заповненим");
        } else if (!isBetween(address.length, 5, 30)) {
            showError(addressEl, "Поле має містити від 5 до 30 символів");
        } else {
            valid = true;
            showSuccess(addressEl);
        }
        return valid;
    },
};
export const isRequired = validationFunctions.isRequired;
export const isBetween = validationFunctions.isBetween;
export const isDateOfBirth = validationFunctions.isDateOfBirth;
export const showError = validationFunctions.showError;
export const showSuccess = validationFunctions.showSuccess;
export const checkUserName = validationFunctions.checkUserName;
export const checkAddress = validationFunctions.checkAddress;
export const checkDateOfBirth = validationFunctions.checkDateOfBirth;
export const removeValidClass = validationFunctions.removeValidClass;