/*1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47].
 Знайти суму та кількість позитивних елементів. */
 const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]; 
 const findPositive = arr.filter( (element) => element > 0) ;
 const findPositiveSum = findPositive.reduce((total,element) => total + element, 0);
 const countPositive = findPositive.length;
    
 alert(`Task 1
 Positive numbers from array
 ${findPositive} 
 Sum of positive numbers
 ${findPositiveSum}
 Quantity of positive numbers
 ${countPositive}`);

/*2.Знайти мінімальний елемент масиву
 та його порядковий номер.*/
 const minElement = Math.min(...arr);
 const indexOfMinZero = arr.indexOf(minElement);
 const indexOfMinOne = arr.indexOf(minElement) + 1;

 alert (`Task 2
 Min value of array
 ${minElement}
 Index of min value(starting with 0)
 ${indexOfMinZero}
 Index of min value(starting with 1)
 ${indexOfMinOne}`);

 /*3.Знайти максимальний елемент масиву
  та його порядковий номер.*/
 const maxElement = Math.max(...arr);
 const indexOfMaxZero = arr.indexOf(maxElement);
 const indexOfMaxOne = arr.indexOf(maxElement) + 1;

 alert (`Task 3
 Max value of array
 ${maxElement}
 Index of max value(starting with 0)
 ${indexOfMaxZero}
 Index of max value(starting with 1)
 ${indexOfMaxOne}`);

 /*4.Визначити кількість
  негативних елементів.*/
 const findNegative = arr.filter((element) => element < 0);
 const findNegativeCount = findNegative.length;
 alert(`Task 4
 Quantity of negative elements: ${findNegativeCount}`); 

 /*5. Знайти кількість непарних позитивних елементів.*/
 const positiveUneven = findPositive.filter((element) => element%2 !== 0);
 const positiveUnevenQuantity = positiveUneven.length;
 alert(`Task 5
 Uneven positive numbers
  ${positiveUneven}
 Quantity of positive uneven numbers
 ${positiveUnevenQuantity}`);

 /*6.Знайти кількість парних позитивних елементів.*/
 const positiveEven = findPositive.filter((element) => element%2 === 0);
 const positiveEvenQuantity = positiveEven.length;
 alert(`Task 6
 Even positive numbers
  ${positiveEven}
 Quantity of positive even numbers
 ${positiveEvenQuantity}`);

 /*7.Знайти суму парних позитивних елементів.*/
 const sumOfPositiveEven = positiveEven.reduce((total,element) => total + element,0);
 alert(`Task 7
  Sum of positive even numbers
  ${sumOfPositiveEven}`);

 /*8.Знайти суму непарних позитивних елементів.*/
 const sumOfPositiveUneven = positiveUneven.reduce((total,element) => total + element,0);
 alert(`Task 8
  Sum of positive uneven numbers
  ${sumOfPositiveUneven}`);

 /*9.Знайти добуток позитивних елементів.*/
 const positiveProduct = findPositive.reduce((total,element) => total*element, 1);
 alert(`Task 9
 Product of positive numbers
 ${positiveProduct}`);

 /*10.Знайти найбільший серед елементів масиву, остальні обнулити.*/
 const nullNotMax = arr.map((element,index,array) =>{
    if(element !== Math.max(...array) ) {
        element = 0;
    }
    return element;
 });

 alert(`Task 10
 Array with max value saved and others changed to zero
 ${nullNotMax}`);


  
 