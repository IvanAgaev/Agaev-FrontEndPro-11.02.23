import { isRequired, showError, showSuccess, removeValidClass } from "../homework37/modules/validation.js";

const form = document.forms.getPostById;

const getIdValue = () => document.getElementById("idNum").value.trim();

const isValidId = (num) => {
    return Number.isInteger(num) && num >= 1 && num <= 100;
};

const checkIdInput = () => {
    let valid = false;
    const idInput = document.getElementById("idNum");
    const idInputValue = getIdValue();
    if (!isRequired(idInputValue)) {
        showError(idInput, "Поле має бути заповнене");
    } else if (!isValidId(+idInputValue)) {
        showError(idInput, "Поле має бути заповнено числом від 1 до 100");
    } else {
        valid = true;
        showSuccess(idInput);
    }
    return valid;
};

const renderCartInfo = (data) => {
    form.insertAdjacentHTML("afterend", `
    <div class="card mb-5 w-50">
             <div class="card-body">
                <h5 class="card-title">${data.title}</h>
                <h6 class="card-subtitle">Номер поста - <span class="idVal">${data.id}</span></h2>
                 <p class="card-text">${data.body}</p>
                <button type="button" class="btn btn-success showComments">Показати коментарі до публікації</button>
                 </div>
                 </div>`);

};

const removeItem = (item) => {
    item.remove();
};


form.addEventListener("input", (event) => {
    switch (event.target.id) {
        case "idNum":
            checkIdInput();
            break;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.nextElementSibling !== null) {
        removeItem(form.nextElementSibling);
    }
    if (!checkIdInput()) {
        checkIdInput();
    } else {
        fetch(`https://jsonplaceholder.typicode.com/posts/${getIdValue()}`)
            
            .then(response => {
                if (response.status === 404) {
                    return Promise.reject(new Error("лол 404"));
                }
                return response.json();
            })

            .then(json => {
                renderCartInfo(json);
                const showComments = document.getElementsByClassName("showComments");

                for (let i = 0; i < showComments.length; i++) {

                    let item = showComments[i];

                    item.addEventListener("click", event => {
                        event.preventDefault();
    
                        const cardBody = item.parentElement;
                        const idEl = cardBody.querySelector(".idVal");
                        const idValue = idEl.textContent.trim();
                        fetch(`https://jsonplaceholder.typicode.com/posts/${idValue}/comments`)
                            
                            .then(respon => {
                                
                                return respon.json();
                            })

                            .then(data => {
                                item.setAttribute("disabled", true);
                                const comSection = document.createElement("div");
                                comSection.className = "comments__section";
                                cardBody.append(comSection);
                                const commentSection = document.querySelector(".comments__section");
                                data.forEach(element => {
                                    commentSection.insertAdjacentHTML("beforeend", `
                                
                                    <h5 class="card-title">Комментар від ${element.name}</h5>
                                    <h6 class="card-subtitle">${element.email}</h6>
                                    <p class="card-text">${element.body}</p>
                                </div>`)
                              
                                });
                                commentSection.insertAdjacentHTML("beforeend",
                                    '<button type="button" class="btn btn-light hideComments">Сховати комментарі</button>');
                                 
                                const hideComments = document.querySelector(".hideComments");
                                hideComments.addEventListener("click", (event) => {
                                    event.preventDefault();
                                    removeItem(commentSection);
                                    removeItem(hideComments);
                                    item.removeAttribute("disabled");
                                })
                              
                            })
                    })
                }

            })
            .catch(error => {
                alert(error);
            })

        form.reset();
        removeValidClass();
    }
});

