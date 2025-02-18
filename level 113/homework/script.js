class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
  
    get names() {
        return `${this.firstName[0]}${this.lastName[0]}`;
    }
  
    get agemonth() {
        return this.age * 12;
    }
  
    get morethan60() {
        return this.age >= 60;
    }
}
  
class Product {
    constructor(price, discountprocent = 0) {
        this.price = price;
        this.discountprocent = discountprocent;
    }
  
    get formatPrice() {
        return `$${this.price.toFixed(2)}`;
    }
  
    get discountPrice() {
        const discountedAmount = (this.price * this.discountprocent) / 100;
        return `$${(this.price - discountedAmount).toFixed(2)}`;
    }
}
  

const person = new Person("sigma", "chad", 65);
console.log(person.names);
console.log(person.agemonth);
console.log(person.morethan60);
  
const product = new Product(100, 20);
console.log(product.formatPrice);
console.log(product.discountPrice);