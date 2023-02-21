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

    getCalories(type) {
        switch(type) {
            case Hamburger.SIZE_SMALL:
                return 20;
            case Hamburger.SIZE_LARGE:
                return 40;
            case Hamburger.STUFFING_CHEESE: 
                return 20;
            case Hamburger.STUFFING_POTATO:
                return 10;
            case Hamburger.STUFFING_SALAD:
                 return 5;
             case Hamburger.TOPPING_MAYO:
                return 5;
            case Hamburger.TOPPING_SAUCE:
                return 0; 
            default:
                return 0;
        }
    };

    getPrice(type) {
        switch(type) {
            case Hamburger.SIZE_SMALL:
                return 50;
            case Hamburger.SIZE_LARGE:
                return 100;
            case Hamburger.STUFFING_CHEESE: 
                return 10;
            case Hamburger.STUFFING_POTATO:
                return 15;
            case Hamburger.STUFFING_SALAD:
                 return 20;
            case Hamburger.TOPPING_MAYO:
                return 20;
            case Hamburger.TOPPING_SAUCE:
                return 15;    
            default:
                return 0;   
        }
    }

    addTopping(topping) {
        this._calories += this.getCalories(topping);
        this._price += this.getPrice(topping);
    };

    calculate() {
        this._calories += this.getCalories(this._size);
        this._calories += this.getCalories(this._stuffing);

        return this._calories;
    };
    calculatePrice() { 
        this._price += this.getPrice(this._size);
        this._price += this.getPrice(this._stuffing);

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

