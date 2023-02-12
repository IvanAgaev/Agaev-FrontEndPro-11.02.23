let firstNum = prompt('Введіть перше число для обчислення');
let secondNum = prompt('Введіть друге число для обчислення');
let sum = Number(firstNum) + Number(secondNum);
let minus = Number(firstNum) - Number(secondNum);
let multiply = Number(firstNum) * Number(secondNum);
let divide = Number(firstNum) / Number(secondNum);

alert(String(firstNum)+ '+' + String(secondNum) + '=' + sum + '\n'
 + String(firstNum)+ '-' + String(secondNum) + '=' + minus + '\n'
 + String(firstNum)+ '*' + String(secondNum) + '=' + multiply + '\n'
 +String(firstNum)+ '/' + String(secondNum) + '=' + divide + '\n' );