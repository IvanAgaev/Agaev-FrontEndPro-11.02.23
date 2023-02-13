const arrayPromptLength = prompt("Вкажіть довжину массиву.");
if(arrayPromptLength===null){
    alert('На жаль, ви скасували дію');
}
else{
const arrayLength = Number(arrayPromptLength);



const array = [];

for (let i = 0; i < arrayLength; i++) {
    let count = i;
    let newElement = prompt('Введіть' + ' '  + count + ' элемент');
    array.push(newElement);
}


alert("Створений массив" + " " + array);

const array2 = [...array];
array2.splice(1, 3);
alert('Массив з видаленими елементами з 2-4 включно' + '\n' + array2);

function selectionSort(arr) {
    const arrSorted = [...arr];
    let min = 0;
    for (let i = 0; i < arrSorted.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arrSorted.length; j++) {
            if (arrSorted[min] > arrSorted[j]) {
                min = j;
            }
        }
        temp = arrSorted[i];
        arrSorted[i] = arrSorted[min];
        arrSorted[min] = temp;
    }
    return arrSorted;

}
alert('Відсортований массив за зростанням' + ' ' + selectionSort(array));
}



