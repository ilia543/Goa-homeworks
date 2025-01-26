class Animal {
    constructor(name, species, age) {
      this.name = name;
      this.species = species;
      this.age = age;
    }
  
    makeSound() {
      console.log(`${this.name}, the ${this.species}, is making a sound.`);
    }
  }
  

  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    drive() {
      console.log(`${this.make} ${this.model} (${this.year}) is driving.`);
    }
  }
  

  class Human {
    constructor(name, age, occupation) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
    }
  
    introduce() {
      console.log(`Hi, I'm ${this.name}. I'm a ${this.age}-year-old ${this.occupation}.`);
    }
  }
  

  

  const dog = new Animal("Buddy", "Dog", 5);
  const cat = new Animal("Whiskers", "Cat", 3);
  const bird = new Animal("Tweety", "Bird", 1);
  

  const car1 = new Car("Tesla", "Model S", 2021);
  const car2 = new Car("Toyota", "Corolla", 2015);
  const car3 = new Car("Ford", "Mustang", 2019);
  

  const person1 = new Human("Alice", 28, "Engineer");
  const person2 = new Human("Bob", 35, "Teacher");
  const person3 = new Human("Charlie", 22, "Designer");
  

  console.log(dog, cat, bird);
  dog.makeSound();
  
  console.log(car1, car2, car3);
  car1.drive();
  
  console.log(person1, person2, person3);
  person1.introduce();
  