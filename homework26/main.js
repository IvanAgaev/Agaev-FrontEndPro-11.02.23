const myInput = document.querySelector('.myInput');
const newElem = document.createElement('div');
newElem.setAttribute('style','display:none');
newElem.innerHTML = ('Bonsoir Elliot');
myInput.after(newElem);

function makeVisible () {
    newElem.setAttribute('style', 'display: inline-block');
}
function hideDiv () {
    newElem.setAttribute('style', 'display:none');
}
myInput.addEventListener('focus',makeVisible);
myInput.addEventListener('blur',hideDiv);
