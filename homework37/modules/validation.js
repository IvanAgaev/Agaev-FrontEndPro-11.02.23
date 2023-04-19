
export const isRequired = value => value === "" ? false : true;
export const isBetween = (length, min, max) => length < min || length > max ? false : true;

export const isDateOfBirth = (date) => {
    const re = new RegExp("^((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))/(0[1-9])|(1[0-2])$");
    return re.test(date);
};

export const checkUserName = () => {
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
};

export const checkDateOfBirth = () => {
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
};

export const checkAddress = () => {
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
};
