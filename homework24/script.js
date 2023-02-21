class Hamburger {
    static TOPPING_MAYO = 'mayo';
    static TOPPING_SAUCE = 'sauce';
    static SIZE_SMALL = 'small';
    static SIZE_LARGE = 'large';
    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';
    _size = '';
    _stuffing = '';
    _sauce = '';
    _price = 0;
    _calories = 0;
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
    };

    addTopping(topping) {
        if(topping === Hamburger.TOPPING_SAUCE) {
            this._price += 15;
        } else if (topping === Hamburger.TOPPING_MAYO) {
            this._price += 20;
            this._calories += 5;
        }

    };

    calculate() {
        if (this._size ===  Hamburger.SIZE_SMALL) {
            this._calories += 20;  
        } else if (this._size === Hamburger.SIZE_LARGE) {
            this._calories += 40;
        }

        if (this._stuffing === Hamburger.STUFFING_CHEESE) {
            this._calories += 20;
        } else if (this._stuffing === Hamburger.STUFFING_SALAD) {
            this._calories += 5;

        } else if (this._stuffing === Hamburger.STUFFING_POTATO) {
            this._calories += 10;
        }
        return this._calories;
        
    };
    calculatePrice() { 
        if (this._size === Hamburger.SIZE_SMALL) {
            this._price += 50;
        } else if (this._size === Hamburger.SIZE_LARGE) {
            this._price += 100;
        } 
        if (this._stuffing === Hamburger.STUFFING_CHEESE) {
            this._price += 10;
        } else if (this._stuffing === Hamburger.STUFFING_SALAD) {
            this._price += 20;
        } else if (this._stuffing === Hamburger.STUFFING_POTATO) {
            this._price += 15;
        }
        return this._price;
        

    }

};

const ham = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
ham.addTopping(Hamburger.TOPPING_MAYO);
console.log(`У вашому замовленні ${ham.calculate()} калорій`);
console.log(`Ваше замовлення коштує ${ham.calculatePrice()} тугриків`);

console.log('\n');

const ham2 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
ham2.addTopping(Hamburger.TOPPING_SAUCE);
console.log(`У вашому замовленні ${ham2.calculate()} калорій`);
console.log(`Ваше замовлення коштує ${ham2.calculatePrice()} тугриків`);

