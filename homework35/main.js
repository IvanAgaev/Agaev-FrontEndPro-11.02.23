import {isRequired,isBetween,isDateOfBirth,showError,showSuccess,checkUserName,checkDateOfBirth,checkAddress} from "./modules/validation.js";
const form = document.forms.registration;
const submit = form.querySelector("#submit");

const isCheckBoxOrRadio = type => ["checkbox", "radio"].includes(type);

const showBoxError = (errorField, message) => {
    errorField.innerHTML = message;
};

const showBoxSuccess = (errorField) => {
    errorField.innerHTML = "";
};

const checkCheckbox = () => {
    let valid = false;
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    for (let checkBox of checkBoxes) {
        if (checkBox.checked) {
            valid = true;
        }
    }
    if (valid === true) {
        showBoxSuccess(document.getElementById("error_message"));
    } else {
        showBoxError(document.getElementById("error_message"), "Має бути обрана принаймні одна мова!");
    }

    return valid;
};

let timesMyFuncCalled = 0;

const retrieveFormData = (event) => {
    event.preventDefault();

    if (!checkUserName() || !checkDateOfBirth() || !checkAddress() || !checkCheckbox()) {
        checkUserName();
        checkDateOfBirth();
        checkAddress();
        checkCheckbox();
    } else if (checkUserName() && checkDateOfBirth() && checkAddress() && checkCheckbox()) {
        const values = {};
        const table = document.createElement("table");
        table.classList.add("table");
        const tbody = document.createElement("tbody");
        tbody.setAttribute("id", "tbody_registr-data");

        for (let field of form) {
            const { name } = field;
            if (name) {
                const { type, checked, value } = field;
                if (isCheckBoxOrRadio(type)) {

                    if (checked) {
                        values[name] += " " + value + " ";
                        values[name] = values[name].replaceAll("undefined", "").trim();
                    }

                } else {
                    values[name] = value;
                }
            }
        }

        if (timesMyFuncCalled === 0) {
            const thead = document.createElement("thead");
            const tr = document.createElement("tr");

            Object.keys(values).forEach(key => {
                const th = document.createElement("th");
                th.innerHTML = key;
                tr.append(th);
            });

            table.append(thead);
            thead.append(tr);
            table.append(tbody);
            form.after(table);
        }
        const newBody = document.getElementById("tbody_registr-data");
        const newTr = document.createElement("tr");

        Object.values(values).forEach(value => {
            const td = document.createElement("td");
            td.innerHTML = value;
            newTr.append(td);
            newBody.append(newTr);
        });

        form.reset();
        const inputsCollection = document.querySelectorAll("input,textarea");
        inputsCollection.forEach(input => {
            input.classList.remove("is-valid");
        });
        
        timesMyFuncCalled++;
    }
};

form.addEventListener("input", (event) => {
    switch (event.target.id) {
        case "username":
            checkUserName();
            break;
        case "dateOfBirth":
            checkDateOfBirth();
            break;
        case "address":
            checkAddress();
            break;
    }
});

form.addEventListener("submit", retrieveFormData);
