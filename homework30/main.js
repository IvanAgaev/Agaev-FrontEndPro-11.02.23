const parent = document.querySelector('.parent');
const emoji = document.getElementsByClassName('.emoji');
let count = 0;

parent.addEventListener('click', (event) => {
  if(event.target.closest('.emoji__picture')) {
     const targetClass = event.target;
     const countClass = targetClass.nextElementSibling;
     countClass.textContent = Number(countClass.textContent) + 1;
     console.log(countClass);
  }
});
