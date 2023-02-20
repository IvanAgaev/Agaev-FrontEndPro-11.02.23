class Student {
    name = '';
    surname = '';
    _birthYear = 0;
    _arrOfGrades = [];
    _arrPresence = [];

    constructor (name, surname, birthYear, arrOfGrades) {
        this.name = name;
        this.surname = surname;
        this._birthYear = birthYear;
        this._arrOfGrades = arrOfGrades;

    };
    get age() {
        return 2023-this._birthYear;

    };
    get averageGrade() {
        let count = 0;
        const sumOfGrades = this._arrOfGrades.reduce((previousValue,element) => {
        count++;
        return previousValue + element;
        },0);
        return sumOfGrades/count;
    }

    present() {
        if (this._arrPresence.length<25) {
        this._arrPresence.push(true);
        } else {
            console.log('Помилка. Уроків лише 25');
        };
    };

    absent() {
        if (this._arrPresence.length<25) {
            this._arrPresence.push(false);
            } else {
                console.log('Помилка. Уроків лише 25');
    
            };
    };

    summary() { 
        const averGrade = this.averageGrade;
        let countPresence = 0;
        const sumOfPresence = this._arrPresence.reduce((previousValue,element) => {
            if (element===true) { 
               previousValue++;
            }
            return previousValue;
        },0);
        
        const averPres = sumOfPresence/this._arrPresence.length;

        console.log(`Учню(-чениці) ${this.name} ${this.age} років
Середня оцінка у учня(чениці) ${this.name} - ${averGrade}
Середнє відвідування у учня(чениці) ${this.name} - ${averPres}`);

        if (averGrade > 90 && averPres > 0.9) {
            return `Молодець ${this.name}!`;
        } else if (averGrade > 90 || averPres > 0.9) {
            return `Добре ${this.name}, але можна краще`;
        } else {
            return `${this.name} - редиска`;
        }
        

        
    }
    
};

const grades = [87,90,100,89];
const grades2 = [87,78,90,89];
const grades3 = [99,95,99,100,100];
const ivan = new Student('Іван', 'Агаєв', 2004, grades);
const olga = new Student ('Ольга', 'Гайдук',2006,grades2);
const sonOfMomsFriend = new Student ('Саша', 'Куракін', 2003, grades3)

ivan.present();
ivan.absent();
ivan.present();
ivan.present();
ivan.present();
console.log(ivan.summary());

console.log('\n');

olga.absent();
olga.absent();
olga.present();
olga.absent();
olga.present();
console.log(olga.summary());

console.log('\n');

sonOfMomsFriend.present();
sonOfMomsFriend.present();
sonOfMomsFriend.present();
sonOfMomsFriend.present();
sonOfMomsFriend.present();
console.log(sonOfMomsFriend.summary());




