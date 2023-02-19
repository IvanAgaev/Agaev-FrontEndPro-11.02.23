class Human {
   name = 'human';
   sex = 'sex';

    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
};

const bob = new Human('Bob', 'Male');
const alex = new Human('Alex', 'Male');
const mary = new Human('Mary', 'Female');
const sasha = new Human('Sasha', 'Female');

class Apartment {
     humanArr = [];
     addHuman(human) {
        if (human instanceof Human) {
            this.humanArr.push(human);
        } else {
            console.log('Not a human');
        }
     }
      get humanArr() {
        return this.humanArr;
     }
}

class Home {
    apartmentArr = [];
    maxQuantity = 0;
    constructor (maxQuantity) {
        this.maxQuantity = maxQuantity;
    };
    addApartment(apartment) {
        if (apartment instanceof Apartment && this.apartmentArr.length < this.maxQuantity) {
            this.apartmentArr.push(apartment);
            
        } else {
            console.log('Помилка. Не є екземпляром классу або массив дорівнює максимальній довжині');

        }

    };
        get apartmentArr () {
        return this.apartmentArr;

    }
}

const apartment = new Apartment();
apartment.addHuman(bob);
apartment.addHuman(alex);

const apartment2 = new Apartment();
apartment2.addHuman(mary);
apartment2.addHuman(sasha);

const home = new Home(2);
home.addApartment(apartment);
home.addApartment(apartment2);

const k = JSON.stringify(home.apartmentArr);
console.log('Екземпляри класу людина додані до екземплярів класу квартира' + '\n');
console.log(JSON.stringify(apartment.humanArr) + '\n' + JSON.stringify(apartment2.humanArr));
console.log('\n' + 'Екземпляри класу квартира додані до екземпляру класу будинок' + '\n');
console.log(k);

 
