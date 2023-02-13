//Вивести на сторінку в один рядок числа від 10 до 20 розділені комою

function firstTask () {
let numbers = "";
for (let i = 10; i < 21; i++) {
  number = i + ",";
  if(i === 20){
    number = i;
  }
  numbers += number;
}

alert('Числа від 1 до 20' + '\n' + numbers);
};

firstTask();

//Вивести квадрати чисел від 10 до 20 

function secondTask() {
    let numbers = '';
for (let i = 10; i < 21; i++) {
    number = Math.pow(i,2) + ',';
    if(i === 20){
      number = Math.pow(i,2);
    }
    numbers += number;
  }

  alert('Квадрати чисел від 1 до 20'+ '\n' + numbers);
};

secondTask();

// Вивести таблицю множення на 7
function multiplyBySeven(){
    const firstNum = 7;
    let secondNum = 0;
    let result = '';

    for(let i = 1; i<10; i++){
        if(i===9){
            result += firstNum*i;
          }
          else{
      result += firstNum*i + ',';
          }
      
    }
    alert('Множення на 7' + '\n'+result);
}
multiplyBySeven();

//Знайти суму всіх цілих чисел від 1 до 15
function sumFivteen (){
    let result = 0;
    for(let i = 0; i<15;i++){ //1 + 2 = 3 
            let sum = i + 1;
          
            if(i===15){
                sum=0;
            }
            
            result += sum; 
    }
    alert('Cума цілих чисел від 1 до 15' + '\n'+ result);
};

sumFivteen(); 

// Добуток усіх цілих чисел від 15 до 35
function multiplyFromTo(){
    let result = 1;
    for(let i = 14; i<35; i++) {
    let sum = i+1;
    result = result * sum;
    console.log(result)
    }
    alert('Добуток усіх цілих чисел від 15 до 35' + '\n'+result);
};
multiplyFromTo();

//Середне африфмитичне від 1 до 500
function averageFromOneTo(num = 500) {
    let result = 0; 
    for(let i = 0; i<num; i++){
        let sum = i+1;
        result += sum;
    }
    const res = result/num;
    alert('Середне африфмитичне від 1 до 500' + '\n' + res);

}
averageFromOneTo(); 

//Вивести суму лише парних чисел в діапазоні від 30 до 80

function sumOfEvenFromTo(numFrom = 30, numTo = 80) {
    let result = 0;
    let sum = 0;
    let sumEven = 0;
    for(let i = numFrom-1; i<numTo; i++){
        sum = i + 1;
        if(sum % 2 === 0){
            result+=sum;
        }
       
    }
    alert('сума лише парних чисел в діапазоні від 30 до 80' + '\n' + result);
};
sumOfEvenFromTo();

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.

function numDivideByThree() {
let result = '';
for (let i = 100; i<201; i++){
    if(i%3===0){
        let res = i + ' ';
        result += res;
        
    } 
   
}
alert('Числа, які діляться на 3 від 100 до 200' + '\n' + result);
};
numDivideByThree();
function numberDividers(num){
let result = '';
let sumOfEven = 0;
let res = 0;
let temp = 0;
let count = 0;

for (let i = 0 ; i<num + 1; i++){
    temp = i;
    
if(num%temp === 0){
    res = temp + ' '; 
    result +=res; 
    if(temp%2===0){
       count++;
       sumOfEven = sumOfEven + temp;
       
    }
    
    


}

}
alert('Дільники' + ' ' + num + '\n' + result + '\n' + count + ' '+ 'кількість парних елементів' + ' ' + '\n' + 
sumOfEven + ' - сума парних дільників');

}
numberDividers(100);

//таблиця множиння від 1 до 10
function multiplyTable() {
    let firstNumber = 0;
    let secondNumber = 0;
    let result = '';
    for (let i = 1; i<=10; i++){
         firstNumber = i;
        for (let j = 1 ; j<=10; j++){
         secondNumber = j;
         let res = firstNumber * secondNumber;
         result += res +' ';
        }
        result +='\n';
    }
    alert('Таблиця множення' + '\n' + result);
};
multiplyTable();

