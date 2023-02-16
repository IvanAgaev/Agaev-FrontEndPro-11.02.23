/* Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.
 Все це із замиканнями */

 function addArg (num = 0) {
    
     function add (k) {
      return num = num + k;
    }
    return add;
 };
 const sum = addArg();

 console.log(sum(3));
 console.log(sum(5));
 console.log(sum(20));
 

 