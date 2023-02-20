/*Реалізуйте функцію removeElement(array, item),
 щоб видалити елемент item з масиву array. */

 const array = [1, 2, 3, 4, 5, 6,5, 7];

 alert(`Old array
 ${array}`);
 
 const removeFunction = (array,item) => {
    array.map((element,index,array) => {
     if (element === item) {
      array.splice(index,1);
     }});
    return array;
 };
 
 const result = removeFunction(array,5);

 alert(`New array with deleted item 5
  ${result}`);

 

