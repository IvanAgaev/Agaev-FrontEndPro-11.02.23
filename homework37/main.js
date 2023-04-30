import { isRequired, isIntegerVal, isGreatThan, isLessThan } from "./modules/validation.js";
import { showError, showSuccess, removeValidClass } from "./modules/formUI.js";
import { getFieldElement, getControlElement, getCaptionElement } from "./modules/getFormElements.js";

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';
const form = document.forms.getPostById;
const postsInfo = document.querySelector(".posts__info");
const commentSection = document.querySelector(".comments-section");
const showComments = document.querySelector(".showComments");
const hideComments = document.querySelector(".hideComments");

const validatePostId = (value) => {
    const errorRequired = isRequired(value);

    if (errorRequired) {
        return errorRequired;
    }

    const errorInteger = isIntegerVal(value);

    if (errorInteger) {
        return errorInteger;
    }

    const errorGreatThan = isGreatThan(value, 100);

    if (errorGreatThan) {
        return errorGreatThan;
    }

    return isLessThan(value, 0);
};

const renderCartInfo = (data) => {
        postsInfo.style.display = "block";
        postsInfo.querySelector(".card-title").innerHTML = data.title;
        postsInfo.querySelector(".idVal").innerHTML = data.id;
        postsInfo.querySelector(".card-text").innerHTML = data.body;
};

const renderComments = (data) => {
    const content = data.reduce((html, item) => html + (
        `<h5 class="card-title">Комментар від ${item.name}</h5>
        <h6 class="card-subtitle">${item.email}</h6>
        <p class="card-text">${item.body}</p>`), "");
    
    commentSection.insertAdjacentHTML("beforeend", content);
   
};

const displayError = (error) => {
    alert(error.message);
};

const apiCall = (url) => fetch(url).then(res => res.json());

const getPostById = (postId) => apiCall(`${API_ENDPOINT}/posts/${postId}`);

const getCommentsByPostId = (postId) => apiCall(`${API_ENDPOINT}/posts/${postId}/comments`);

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

const handlePost = (event) => {
    event.preventDefault();

    const element = getControlElement("post-id");
    const errorField = getCaptionElement("post-id");
    const errorPostId = validatePostId(element.value.trim());

    if (errorPostId) {
        showError("post-id", errorPostId);
        element.focus();
    } else {
        errorField.innerHTML = "";
        showSuccess("post-id", "Успіх!");

        getPostById(element.value.trim())
            .then(renderCartInfo)
            .catch(displayError);

        form.reset();
        handleHideComments();
        removeValidClass();
    }

};

form.addEventListener("submit", handlePost);

postsInfo.addEventListener("click", (event) => {
    if (event.target.classList.contains("showComments")) {
        handleShowComments(event);
    } else if (event.target.classList.contains("hideComments")) {
        handleHideComments();
    }
});


