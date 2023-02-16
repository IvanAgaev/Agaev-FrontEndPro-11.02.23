/*Реалізуйте функцію generateKey(length, characters),
 яка повертає рядок випадкових символів із набору characters довжиною length.*/ 

 const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
 const generateKey = (length, characters) => {
    let result = '';
    let random = 0;
    let charactersLength = characters.length;

    const getRandomIntFrom0ToMax = (max) => {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max)); 
      }

    for (let i = 0; i<length; i++) {

        for (let j = 0; j < charactersLength; j++) {
            random = getRandomIntFrom0ToMax(charactersLength);
        }
        result += characters[random];
        
    }
    return result;
 };

 const key = generateKey(9, characters);
 console.log(key);
 