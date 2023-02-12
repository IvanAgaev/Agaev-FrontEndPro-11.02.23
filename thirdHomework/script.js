let firstLine = prompt('Введіть перший рядок');
let secondLine = prompt('Введіть другий рядок');
let thirdLine = prompt('Введіть третій рядок');
alert(firstLine + ' ' + secondLine + ' ' + thirdLine);

function numberSeparating(number) {
    number = number.toString();
    console.log(number + ' ' + '- число до розділення');
    let arr = number.split('');
    let result = arr.join(' ');
    console.log(result + ' ' + '- розділені числа');
}
numberSeparating(12345);


