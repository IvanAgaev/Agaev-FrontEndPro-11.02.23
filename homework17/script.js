/*1.Дано масив з елементами різних типів.
 Створити функцію яка вираховує середнє арифметичне
  лише числових елементів даного масиву.*/

    const countAverageOfNum = (arr) => {
    if(arr instanceof Array) {
        let count = 0;
        let res = 0; 

        const sum = arr.reduce((total, element) => {
            if(typeof element === 'number') {
                count++;
                res = total + element;
            }

            return res;
        }, 0);
       
        return sum/count;
         
    } else {
      console.log('параметер не є массивом');
     }

};

const array = [4,10, 'Ваня', true];

alert(`Середнє значення числових елементів массиву
${array}
${countAverageOfNum(array)}`); 

/* 2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
 У змінній znak може бути: +, -, *, /, %, ^ (ступінь ). 
 Вивести результат математичної дії, вказаної в змінній znak.
 Обидва числа і знак виходять від користувача. */ 

 
 const doMath = (x, operator, y) => {
    const firstNum = Number(x);
    const secondNum = Number(y);

    if(isNaN(x) || isNaN(y)) {
        alert(`Числа мають бути
        записані у числовому вигляді`);
    } else{
        switch (operator) {
            case '+':
                return firstNum + secondNum;
                break;
            case '-':
                return firstNum - secondNum;
                 break;    
            case '*':
                 return firstNum * secondNum;
                 break; 
            case '/':
                return firstNum / secondNum;
                break; 
            case '%':
                 return firstNum % secondNum;
                 break;  
            case '^':
                 return Math.pow(firstNum, secondNum);
                 break; 
            default:
                return 'Не вірно введено оператор';
                break; 
            


        }
    }
 };

 const promptFirstNum = prompt(`Enter first num`);

 if(isNaN(promptFirstNum) || promptFirstNum === null ) {
    alert('Error. First num must be a number');
 } else {
    const promptOperator = prompt('Enter operator');
    if (promptOperator === null){
        alert('Error. Operator field is empty');
    } else {
    const promptSecondNum = prompt('Enter second num');

    if(isNaN(promptSecondNum) || promptSecondNum === null) {
        alert('Error. Second num must be a number');
     } else {
       const e = doMath(promptFirstNum, promptOperator, promptSecondNum);
       alert (e);

     }
     
 }
 } 

 /* 3.Записати функцію заповнення даними користувача двомірного масиву.
  Довжину основного масиву і внутрішніх масивів задає користувач.
   Значення всіх елементів всіх масивів задає користувач. */

   
   
    const fillArrays = () => {
    const lengthMainArr = prompt('Введіть довжину головного массиву');
    const array = new Array(Number(lengthMainArr));
    let result = '';
    for (let i = 0; i < array.length; i++){
        const arrayILength = prompt(`Введіть довжину ${i + 1} массиву `);
        array[i] = new Array (Number(arrayILength));
        for (let j = 0; j < array[i].length; j++) {
            const el = prompt(`Добавить ${j + 1} елемент в  ${i + 1} масив `);
             array[i][j] = el;
         
         }
         result += array[i].join() + '\n';
         
    }

    return result;

   };

   alert(fillArrays()); 

   /*4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
    'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
     Вихідний рядок та символи для видалення задає користувач. */

     const removeChar =  (str, chars) => {
        let arr = [];
            for (let i = 0; i< str.length; i++){
            for (let j = 0; j < chars.length; j++) {
             if(str[i] === chars[j])  {
                str = str.replaceAll(chars[j],'');
              
             }
            }
        }
           
            return str;

        
     }
     const chars = ['l','w'];
     alert(`String before changing
     Hello world
     String after changing
     ${removeChar('Hello world',chars )}`);
     



   
 
