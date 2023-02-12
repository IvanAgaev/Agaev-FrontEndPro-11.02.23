let hours = prompt('Введіть кількість годин, які треба перевести в секунди');
let minutesInHours = Number(hours) * 60;
let secInHours = minutesInHours * 60;
if(hours!==null){
alert('У' + ' ' + hours + ' ' + 'годинах' + ' ' + secInHours + ' ' + 'секунд');
}
else{
    alert('Ви не ввели дані');
}