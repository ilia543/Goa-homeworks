class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
  

    get perimeter() {
        return 2 * (this.length + this.width);
    }
}
  

const rectangle = new Rectangle(5, 3);
console.log(rectangle.perimeter);
 



class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  

  class Mammal extends Animal {
    constructor(name, hasFur) {
      super(name);
      this.hasFur = hasFur;
    }
  
    walk() {
      console.log(`${this.name} is walking.`);
    }
  }
  

  class Dog extends Mammal {
    constructor(name, hasFur, breed) {
      super(name, hasFur);
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} says Woof!`);
    }
  }
  

  const dog = new Dog("Buddy", true, "Labrador");
  dog.makeSound();
  dog.walk();
  dog.bark();
  


class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    startEngine() {
      console.log(`${this.make} ${this.model}'s engine has started.`);
    }
  
    drive() {
      console.log(`${this.make} ${this.model} is driving.`);
    }
  }
  

  class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
      super(make, model);
      this.batteryCapacity = batteryCapacity;
    }
  

    startEngine() {
      console.log(`${this.make} ${this.model} is powered on silently.`);
    }
  

    drive() {
      super.drive();
      console.log(`${this.make} ${this.model} is running on battery power.`);
    }
  }
  

  const tesla = new ElectricCar("Tesla", "Model S", "100 kWh");
  tesla.startEngine();
  tesla.drive();
  