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
        if(topping === 'sauce') {
            this._price += 15;
        } else if (topping === 'mayo') {
            this._price += 20;
            this._calories += 5;
        }

    };

    calculate() {
        if (this._size === 'small') {
            this._calories += 20;  
        } else if (this._size === 'large') {
            this._calories += 40;
        }

        if (this._stuffing === 'cheese') {
            this._calories += 20;
        } else if (this._stuffing === 'salad') {
            this._calories += 5;

        } else if (this._stuffing === 'potato') {
            this._calories += 10;
        }
        return this._calories;
        
    };
    calculatePrice() { 
        if (this._size === 'small') {
            this._price += 50;
        } else if (this._size === 'large') {
            this._price += 100;
        } 
        if (this._stuffing === 'cheese') {
            this._price += 10;
        } else if (this._stuffing === 'salad') {
            this._price += 20;
        } else if (this._stuffing === 'potato') {
            this._price += 15;
        }
        return this._price;
        

    }

};

const ham = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
ham.addTopping(Hamburger.TOPPING_MAYO);
console.log(ham.calculate());
console.log(ham.calculatePrice());
