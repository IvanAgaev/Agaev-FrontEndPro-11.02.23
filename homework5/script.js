let operation = prompt('Оберіть та впишіть бажану арифметичну дію з наведених(add, sub, mult, div)');
let firstNum = prompt('Введіть перше число');
let secondNum = prompt('Введіть друге число');
let sum = Number(firstNum) + Number(secondNum);
let sub = Number(firstNum) - Number(secondNum);
let multiply = Number(firstNum) * Number(secondNum);
let divide = Number(firstNum) / Number(secondNum);

switch(operation) {
    case 'add':
        alert(firstNum + '+' + secondNum + '=' + sum );
        break;
        case 'sub':
            alert(firstNum + '-' + secondNum + '=' + sub);
            break;
            case 'mult':
                alert(firstNum + '*' + secondNum + '=' + multiply);
                break;
                case 'div':
                    alert(firstNum + '/' + secondNum + '=' + divide);
                    break;
     default:
        alert('Wrong operation. Try again!');
}