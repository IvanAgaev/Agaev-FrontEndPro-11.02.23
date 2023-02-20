class Human {
    name='';
    age = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
     writeInfo() {
      console.log(`His/Her name is ${this.name}\nShe/He is ${this.age} years old`);
    };

};

class Car {
    company = '';
    model = '';
    year = 0;
    numberSign = '';
    owner = {};

    constructor(company, model, year, numberSign) {
        this.company = company;
        this.model = model;
        this.year = year;
        this.numberSign = numberSign;
    };
    
    makeOwner(owner) {
        if(owner instanceof Human && owner.age >=18) {
            this.owner = owner;
        } else {
            console.log('Не вдалось додати власника. Власнику має бути більше 18 років.');
        }

    };
    showInfo() {
        if(this.owner.age >= 18) {

        console.log(`Company - ${this.company}
Model -  ${this.model}
Year - ${this.year}
numberSign - ${this.numberSign}`);
        console.log('\nOwner');
        this.owner.writeInfo();
        
    } else {
        console.log(`Company - ${this.company}
Model -  ${this.model}
 Year - ${this.year}
numberSign - ${this.numberSign}`);
        console.log('\n Власник відсутній');
    }

    }



};
const ivan = new Human ('Іван', 18);
const nastya = new Human ('Настя', 16);
const lisa = new Human ('Ліза',19);
const audi = new Car('Audi','A7',2014,'333UA');
const porsche = new Car('Porsche','911',2010,`456us`);
const ford = new Car('Ford','Mustang',2012,`987es`);

audi.makeOwner(ivan);
audi.showInfo();
console.log('\n');
porsche.makeOwner(lisa);
porsche.showInfo();
console.log('\n');
ford.makeOwner(nastya);
ford.showInfo();

