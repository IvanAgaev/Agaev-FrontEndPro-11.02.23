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
                break;
            case Hamburger.SIZE_LARGE:
                return 40;
                break;
            case Hamburger.STUFFING_CHEESE: 
                return 20;
                break;
            case Hamburger.STUFFING_POTATO:
                return 10;
                break;
            case Hamburger.STUFFING_SALAD:
                 return 5;
                 break;
            default:
                return 0;
                
             
        }
    };
    
    getPrice(type) {
        switch(type) {
            case Hamburger.SIZE_SMALL:
                return 50;
                break;
            case Hamburger.SIZE_LARGE:
                return 100;
                break;
            case Hamburger.STUFFING_CHEESE: 
                return 10;
                break;
            case Hamburger.STUFFING_POTATO:
                return 15;
                break;
            case Hamburger.STUFFING_SALAD:
                 return 20;
                 break;
            default:
                return 0;   
        }
    }

    addTopping(topping) {
        if(topping === Hamburger.TOPPING_SAUCE) {
            this._price += 15;
        } else if (topping === Hamburger.TOPPING_MAYO) {
            this._price += 20;
            this._calories += 5;
        }

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

