const powFunction = (num,degree) => {
    if(degree===1) {
        return num;
    }
    return num * powFunction(num, degree - 1);
}

const firstNumber = prompt('Введіть число, яке хочете возвести в ступінь');

if (isNaN(Number(firstNumber)) || firstNumber.trim() ==='' ) {
    alert(`Форма має бути заповнена
     числовим значенням`);
} else {
    const degreeNumber = prompt('Введіть ступінь в який хочете возвести ваше число');

    if (isNaN(Number(degreeNumber)) || degreeNumber.trim() === '') {
        alert( `Форма має бути заповнена
         числовим значенням` );
    } else {
    alert( `${firstNumber} in ${degreeNumber} degree = ${powFunction(firstNumber,degreeNumber)}` );
    }

}

