import { isRequired } from "./modules/validation.js";
import {showError, showSuccess, removeValidClass } from "./modules/formUI.js";

const api_Endpoint = 'https://jsonplaceholder.typicode.com';
const form = document.forms.getPostById;
const postsInfo = document.querySelector(".posts__info");
const commentSection = document.querySelector(".comments-section");
const showComments = document.querySelector(".showComments");
const hideComments = document.querySelector(".hideComments");

const getIdNumInput = () => document.getElementById("idNum");

const getIdNumValue = () => getIdNumInput().value.trim();

const renderCartInfo = (data) => {
    postsInfo.style.display = "block";

    const titleOfPost = postsInfo.querySelector(".card-title");
    const numOfPost = postsInfo.querySelector(".idVal");
    const postText = postsInfo.querySelector(".card-text");

    titleOfPost.innerHTML = `${data.title}`;
    numOfPost.innerHTML = `${data.id}`;
    postText.innerHTML = `${data.body}`;
};

const renderComments = (data) => {
    data.forEach(element => {
        commentSection.insertAdjacentHTML("beforeend", `
        <h5 class="card-title">Комментар від ${element.name}</h5>
        <h6 class="card-subtitle">${element.email}</h6>
        <p class="card-text">${element.body}</p>`);
    });
};

const displayError = (error) => {
    alert(error.message);
};

const apiCall = (url) => fetch(url).then(res => res.json());

const getPostById = (postId) => apiCall(`${api_Endpoint}/posts/${postId}`);

const getCommentsByPostId = (postId) => apiCall(`${api_Endpoint}/posts/${postId}/comments`);

const handlePost = (event) => {
    event.preventDefault();

    if (!checkOneToHundred(getIdNumInput(), getIdNumValue())) {
        checkOneToHundred(getIdNumInput(), getIdNumValue());
    } else {
        const postIdInput = document.getElementById("idNum");
        const postId = postIdInput.value.trim();

        getPostById(postId)
            .then(renderCartInfo)
            .catch(displayError);

        form.reset();
        removeValidClass();
    }
        
};

const handleShowComments = (event) => {
    event.target.setAttribute("disabled", true);
    const idOfPost = document.querySelector(".idVal").textContent;
    
    getCommentsByPostId(idOfPost)
        .then(renderComments)
        .catch(displayError);
    
    hideComments.style.display = "block";
};

const handleHideComments = () => {
    hideComments.style.display = "none";
    showComments.removeAttribute("disabled");
    commentSection.innerHTML = "";
};

const isValidId = (num) => {
    return Number.isInteger(num) && num >= 1 && num <= 100;
};

const checkOneToHundred = (element, elementValue) => {
    let valid = false;

    if (!isRequired(elementValue)) {
        showError(element, "Поле має бути заповнене");
    } else if (!isValidId(+elementValue)) {
        showError(element, "Поле має бути заповнено числом від 1 до 100");
    } else {
        valid = true;
        showSuccess(element);
    }

    return valid;
};

const inputEventFunc = (event => {
    checkOneToHundred(event.target, getIdNumValue());
});

form.addEventListener("input", inputEventFunc);
form.addEventListener("submit", handlePost);

postsInfo.addEventListener("click", (event) => {
    if (event.target.classList.contains("showComments")) {
        handleShowComments(event);
    } else if (event.target.classList.contains("hideComments")) {
        handleHideComments();
    }
});


