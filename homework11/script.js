//вивести числа від 20 до 30 з кроком 0,5
function halfStep (){

let result = '';

for(let i = 20; i<=30; i = i + 0.5){
result+=i + ' ';
}
alert('Числа від 20 до 30 з кроком 0.5' + '\n' + result); 
};
halfStep ();

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. 

function transCurrency () {
let dollar = 27;
let result = ''; 

for (let i = 10; i<=100; i=i+10){

result += i + ' - ' +  dollar * i + '\n'  ;


}

alert('Перевод з долларів у гривні' + '\n' + result);

};
transCurrency (); 

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
function squareLessThanN(num){
let result = '';
for (let i = 1; i<=100; i++) {
    let k = i;
    if(Math.pow(k,2) <=num){
     result+= k + ' ';
    }
}
alert('Числа, квадрат яких не перевищує' + ' ' + num + ' - ' + result);
};
squareLessThanN(16);

//Дано ціле число. З'ясувати, чи є воно простим.
function isPrime (num) {
    if(num>1){
        for (let i = 2; i<num; i++){
            if(num%i===0){
                return 'Число' + ' ' + num  + ' ' + 'не є простим';
            }
        }
        return 'Число' + ' ' + num  + ' ' + 'є простим';
    }
    else{
        return 'Число' + ' ' + num  + ' ' + 'не є простим';
    }
   
        
    
};
alert(isPrime(8));
alert(isPrime(7));

//Дано деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.  
function canBeInThree(num) {
   for (let i = 1; i<=100; i++){
    let temp = i;
    if(Math.pow(3, i) === num){
        return 'Число' + ' ' + num + ' ' + 'можна отримати піднявши трійку у степінь' + ' ' + i;
    }
    
   }

    return 'Число' + ' ' + num +  ' не можна отримати піднявши трійку у степінь';
    

} 
alert(canBeInThree(81));
alert(canBeInThree(26));



