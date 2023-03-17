const link1 = {href:'google.com'};
const link2 = {href:'github.com'};
const btnHttp = document.getElementById('http');
const btnHttps = document.getElementById('https');

const handlerFirst = () => {
    if (!link1.href.startsWith('http')) {
        link1.href = 'http://' + link1.href;
    }
    
    window.location.href = link1.href;
};
const handlerSecond = () => {
    if (!link2.href.startsWith('https')) {
        link2.href = 'https://' + link2.href;
    }

    window.location.href = link2.href;
};

btnHttp.addEventListener('click', handlerFirst);
btnHttps.addEventListener('click', handlerSecond);

