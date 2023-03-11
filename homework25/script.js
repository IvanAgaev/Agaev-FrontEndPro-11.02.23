/* Створити клас SuperMath.
Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
 Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.
 Якщо хоче, зробити математичну дію znak (яка описана в прототипі),
інакше - запитати введення нових даних через метод input() класу SuperMath.
 Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
При введенні znak потрібно перевірити коректність введення на можливі математичні дії. */

    const object = {
        X: 5,
        Y: 2,
        operator: `%`,
    }


        class SuperMath {
            count(obj) {
            if (isNaN(Number(obj.X)) || isNaN(Number(obj.Y))) {
                return `X та Y мають бути записані у числовому вигляді`
            } 
            switch (obj.operator) {
                case `+`:
                    return Number(obj.X) + Number(obj.Y);
                case `-`:
                    return obj.X - obj.Y;
                case `*`:
                    return obj.X * obj.Y;
                case `/`:
                    return obj.X / obj.Y;
                case `%`:
                    return obj.X % obj.Y;
                default:
                    return 'Помилка. Не вірно введено знак';
            }
        
    };

        input(obj) {
            obj.X = prompt('Впишіть нове число X');
            if (obj.X === null || obj.X.trim() === '' || isNaN(Number(obj.X))) {
                return 'На жаль ви не захотіли ввести дані або дані записано не в числовому вигляді';
            } 
            obj.operator = prompt('Впишіть новий оператор');
            if (obj.operator === null || obj.operator === ``) {
                return 'На жаль ви не захотіли ввести дані';
            } 
            obj.Y = prompt('Впишіть нове число Y');
            if (obj.Y === null || obj.Y.trim() === '' || isNaN(Number(obj.Y))) {
                return `На жаль ви не захотіли ввести дані або дані записано не в числовому вигляді`;
            } 
                return this.count(obj);
        }
            
        ;
            check(obj) {
            let k = confirm(`Чи ви хочете виконати математичну дію ${obj.operator} з ${obj.X} та ${obj.Y}?`);
            if (k) {
            return this.count(obj);
            }
                return this.input(obj);
        }
    };

    const math = new SuperMath();
    alert(math.check(object));

