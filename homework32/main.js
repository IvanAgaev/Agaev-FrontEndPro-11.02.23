let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const btnNext = document.getElementById('Next');
const btnPrev = document.getElementById('prev');

btnNext.addEventListener('click', (event) => {
    offset+=530;
    if (offset>530) {
        btnNext.style.display = 'none';
    } else if (offset = 530) {
        btnPrev.style.display = 'block';
    }
    sliderLine.style.left = -offset + 'px';



});

btnPrev.addEventListener('click', (event) => {
    offset-=530;
    if (offset<530) {
        btnPrev.style.display = 'none';
    } else if (offset = 530) {
        btnNext.style.display = 'block';
    }
    sliderLine.style.left = -offset + 'px';



});