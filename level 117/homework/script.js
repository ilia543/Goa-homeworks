class Math1 {
    constructor(numb, xarisxi) {
        this.numb = numb;
        this.xarisxi = xarisxi;
    }

    get axarisxeba() {
        return this.numb ** this.xarisxi;
    }
}

let number = new Math1(10, 2);
console.log(number.axarisxeba);




class Math2 {
    constructor() {}

    get randomiser() {
        return Math.random() * 100;
    }
}

let obj = new Math2();
console.log(obj.randomiser);