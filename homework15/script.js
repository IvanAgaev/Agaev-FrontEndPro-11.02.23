/*Реалізуйте функцію removeElement(array, item),
 щоб видалити елемент item з масиву array. */

 const array = [1, 2, 3, 4, 5, 6, 7];
 const removeFunction = (array,item) => {
    const modifiedArray = array.filter((element) => element !== item);
    return modifiedArray;
 };
 
 const result = removeFunction(array,5);

 alert(`Old array
  ${array}
 New array with deleted item 5
  ${result}`);

 

