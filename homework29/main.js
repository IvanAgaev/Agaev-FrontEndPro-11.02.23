const btnHttp = document.querySelector('#https');

const handler = (ev) => {
    ev.preventDefault();
    let k = document.getElementById('input').value;
    if (k.trim() !== '' &&  k!==null && !k.startsWith('http')) {
        k = `https://${k}`;
        window.location.href = k;
       
    } else if (k.trim() === '' || k === null) {
        alert('Рядок посилання не був заповненим');
    }
   
};

btnHttp.addEventListener('click', handler);

