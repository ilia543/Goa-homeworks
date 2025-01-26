// class Animal {
//     constructor(name, type, age) {
//         this.name = name;
//         this.type = type;
//         this.age = age;
//     }

//     runrun() {
//         return `${this.name} can run at 70km/h`;
//     }
// }

// class Car {
//     constructor(model, year, maxSpeed) {
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//     }
//     speed(){
//         return `${this.model} ${this.year} can run at 70km/h`
//     }
// }

// const animal1 = new Animal("Lion", "Carnivore", 10);
// console.log(animal1.runrun());

// const car1 = new Car("BMW", 2025, 340);
// console.log(car1.speed());


// class Animal {
//     constructor(type, weight, height) {
//     this.type = type;
//     this.weight = weight;
//     this.height = height;
//     }
// }
    
// class Bird extends Animal {
//     constructor(type, weight, height, beak, wings) {
//     super(type, weight, height);
//     this.beak = beak;
//     this.wings = wings;
//     }
// }  
// let dodo = new Bird("dodo", 15, 40, true, 2);

//classwork ////////////////////////////////////////////////////////////////////////////////////////
//1
// class Rectangle {
//     constructor(length, width) {
//       this.length = length;
//       this.width = width;
//     }
  
  
//     get perimeter() {
//       return 2 * (this.length + this.width);
//     }
// }

// const myRectangle = new Rectangle(10, 5);
// console.log(`Perimeter: ${myRectangle.perimeter}`);

// 2
// class animal{
//     constructor(age){
//         this.age = age;
//     }
// }

// class mammal extends animal{
//     constructor(age, name){
//         super(age, name);
//         this.name = name;
//     }
// }

// class dog extends mammal{
//     constructor(age, name, breed){
//         super(name);
//         this.breed = breed;
//     }
    
// }

// class car{
//     constructor(brand, speed, gasoline){
//         this.brand = brand
//         this.speed = speed
//         this.gasoline = gasoline
//     }
//     drive() {
//         return `${this.brand} is driving at ${this.speed} km/h using gasoline.`;
//     }
// }

// class electrocar extends car{
//     constructor(brand, speed, gasoline, battery){
//         super(brand, speed, gasoline)
//         this.battery = battery
//     }
//     drive() {
//         return `${this.brand} is driving at ${this.speed} km/h using electric power with a ${this.battery} battery.`;
//     }

//     electrocardrive() {
//         return `${this.brand} with ${this.speed} km/h speed has a ${this.battery} battery.`;
//     }
// }

// const myElectroCar = new electrocar("Tesla", "300", "Electric", "Toshiba");
// const mycar = new car("BMW", "500", "gasoline")
// console.log(mycar.drive)
// console.log(myElectroCar.drive());
// console.log(myElectroCar.electrocardrive());