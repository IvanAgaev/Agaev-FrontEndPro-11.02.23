const sliderLine = document.querySelector('.slider-line');
const btnNext = document.getElementById('Next');
const btnPrev = document.getElementById('prev');
const images = document.querySelectorAll('img');
let index = 0;

const showImage = (index) => {
    images.forEach(image => image.classList.remove('active'));
    images[index].classList.add('active');
    if (index===0) {
        btnPrev.setAttribute('disabled', 'true');
    } else {
        btnPrev.removeAttribute('disabled');
    }

    if (index === images.length-1) {
        btnNext.setAttribute('disabled', 'true');
    } else {
        btnNext.removeAttribute('disabled');
    }

}

btnNext.addEventListener('click', (event) => {
   index++;
   showImage(index);
 

});

btnPrev.addEventListener('click', (event) => {
  index--;
  showImage(index);
});