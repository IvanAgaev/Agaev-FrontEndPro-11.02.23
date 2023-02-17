const birthDate = prompt(`Якого ти року народження?`);
if (isNaN(Number(birthDate))) {
    alert(`Помилка! Дата має бути числом`);
} else if (birthDate === null || birthDate.trim() === '') {
    alert(`Шкода, що ти не захотів заповнити форму`);
} else {
    const homeTown = prompt(`З якого ти міста?`);
    if (homeTown === null || homeTown.trim() === '') {
        alert('Шкода, що ти не захотів заповнити форму');
    } else {
        const favSport = prompt(`Введіть свій улюблений спорт`);
        if (favSport === null || favSport.trim() === '') {
            alert('Шкода, що ти не захотів заповнити форму');
        } else {
            const age = 2023 - Number(birthDate);
            let ageStr = `Тобі ${age} років`;
            let cityStr;
            let sportStr;
            
            if (homeTown === 'Київ') {
                cityStr = 'Ти живеш у столиці України';
            } else if (homeTown === 'Лондон') {
                cityStr = 'Ти живеш у столиці Великобританії';
            } else if (homeTown === 'Вашингтон') {
                cityStr = 'Ти живеш у столиці США';
            } else {
                cityStr = `Ти живеш у місті ${homeTown}`;
            }

            if (favSport === 'Шахи') {
                sportStr = `Круто! \n Хочеш стати новим Магнусом Карлсеном?`;
            } else if (favSport === 'Футбол') {
                sportStr = `Круто! \n Хочеш стати новим Мессі?`;
            } else if (favSport === 'Баскетбол') {
                sportStr = `Круто! \n Хочеш стати новим Джорданом?`
            } else {
                sportStr = `Твій улюблений спорт - ${favSport}`;
            }
            alert (`${ageStr} \n ${cityStr} \n ${sportStr}`);
            
        }

    }
}





