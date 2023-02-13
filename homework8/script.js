let birthDate = prompt('Введіть рік свого народження.');

if (birthDate === null){
    alert("шкода, що ви не захотіли вказати свій вік");
}


else{
let birthDateTrim = birthDate.trim();
if(isNaN(+birthDate) || birthDateTrim ===''){
    alert('Невірно введено дату. Дата має бути обов`язково заповнена числовим значенням.');
}
else{
 
let homeTown = prompt('В якому місті ви проживаєте?');
if (homeTown === null){
    alert("шкода, що ви не захотіли вказати своє місто");
}
else{ 
 let homeTownTrim = homeTown.trim() ;
 if(homeTownTrim ===''){
    alert('Рядок місто має бути заповненим');
 }  
 else{
let favSport = prompt('Вкажіть ваш улюблений вид спорту.');
if (favSport === null){
    alert("шкода, що ви не захотіли вказати свій улюблений спорт");
}
else{
let favSportTrim = favSport.trim();
if(favSportTrim ===''){
    alert('Рядок улюблений спорт має бути заповненим');
}
else{
let ukraine = 'України';
let usa = 'США';
let space = ' ';
let britain = 'Великобританії';

let userAge = 2023 - Number(birthDate);


if(homeTown === 'Київ' && favSport === 'шахи'){
alert('Тобі' + space + userAge + space + 'років' +'\n'
       + 'Ти живеш у столиці' + space + ukraine + '\n'
       + 'Круто! Хочеш стати Магнусом Карлсеном?' );
}
else if(homeTown === 'Лондон' && favSport==='шахи'){
    alert('Тобі' + space + userAge + space + 'років' +'\n'
           + 'Ти живеш у столиці' + space + britain + '\n'
           + 'Круто! Хочеш стати Магнусом Карлсеном?' );
}
           else if(homeTown === 'Вашингтон' && favSport==='шахи'){
            alert('Тобі' + space + userAge + space + 'років' +'\n'
                   + 'Ти живеш у столиці' + space + usa + '\n'
                   + 'Круто! Хочеш стати Магнусом Карлсеном?' );
}
else if(homeTown === 'Лондон' && favSport==='футбол'){
    alert('Тобі' + space + userAge + space + 'років' +'\n'
           + 'Ти живеш у столиці' + space + britain + '\n'
           + 'Круто! Хочеш стати Ліонелем Мессі?' );
}
else if(homeTown === 'Київ' && favSport==='футбол'){
    alert('Тобі' + space + userAge + space + 'років' +'\n'
           + 'Ти живеш у столиці' + space + ukraine + '\n'
           + 'Круто! Хочеш стати Ліонелем Мессі?' );
}
           else if(homeTown === 'Вашингтон' && favSport==='футбол'){
            alert('Тобі' + space + userAge + space + 'років' +'\n'
                   + 'Ти живеш у столиці' + space + usa + '\n'
                   + 'Круто! Хочеш стати Майклом Джорданом?' );
}
else if(homeTown === 'Лондон' && favSport==='баскетбол'){
    alert('Тобі' + space + userAge + space + 'років' +'\n'
           + 'Ти живеш у столиці' + space + britain + '\n'
           + 'Круто! Хочеш стати Майклом Джорданом?' );
}
else if(homeTown === 'Київ' && favSport==='баскетбол'){
    alert('Тобі' + space + userAge + space + 'років' +'\n'
           + 'Ти живеш у столиці' + space + ukraine + '\n'
           + 'Круто! Хочеш стати Майклом Джорданом?' );
}
           else if(homeTown === 'Вашингтон' && favSport==='баскетбол'){
            alert('Тобі' + space + userAge + space + 'років' +'\n'
                   + 'Ти живеш у столиці' + space + usa + '\n'
                   + 'Круто! Хочеш стати Майклом Джорданом?' );
}

else if(favSport==='баскетбол'){
    alert('Тобі' + space + userAge + space + 'років' +'\n'
           + 'Ти живеш у місті' + space + homeTown + '\n'
           + 'Круто! Хочеш стати Майклом Джорданом?' );
}
           else if(favSport==='футбол'){
            alert('Тобі' + space + userAge + space + 'років' +'\n'
                   + 'Ти живеш у місті' + space + homeTown + '\n'
                   + 'Круто! Хочеш стати Ліонелем Мессі?' );
}
else if(favSport==='шахи'){
    alert('Тобі' + space + userAge + space + 'років' +'\n'
           + 'Ти живеш у місті' + space + homeTown + '\n'
           + 'Круто! Хочеш стати Магнусом Карлсеном?' );
}
else if(homeTown === 'Київ'){
    alert('Тобі' + space + userAge + space + 'років' +'\n'
    + 'Ти живеш у столиці' + space + ukraine + '\n'
    + 'Твій улюблений вид спорту' + space + favSport );
}
           else if(homeTown === 'Вашингтон'){
            alert('Тобі' + space + userAge + space + 'років' +'\n'
            + 'Ти живеш у столиці' + space + usa + '\n'
            + 'Твій улюблений вид спорту' + space + favSport );
}
else if(homeTown === 'Лондон'){
    alert('Тобі' + space + userAge + space + 'років' +'\n'
           + 'Ти живеш у столиці' + space + britain + '\n'
           + 'Твій улюблений вид спорту' + space + favSport );
}
else{
    alert('Тобі' + space + userAge + space + 'років' +'\n'
    + 'Ти живеш у місті' + space + homeTown + '\n'
    + 'Твій улюблений вид спорту' + space + favSport ); 
}
}
}
}
}
}
}


