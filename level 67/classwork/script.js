// let num = 5;

// while (num < 10){
//     console.log(num);
//     num++;
// }


// const me = {
//     name: "ilia",
//     surname: "dzindzibadze",
//     age: 15,
//     height: 170.5,
//     addres: {
//         qvekana: saqartvelo,
//         qalaqi: tbilisi
//     }
// }

// introduce: Function();{
//     console.log(this.name, me);
// }

// function Person(name, surname){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// const pers1 = new Person("ilia", "sigma", 15)
// const pers2 = new Person("luka", "chad", 25)
// const pers3 = new Person("gio", "sigmachad", 150)
// console.log(pers1)


function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person(prompt(), prompt());
console.log("Hi, I am " + person1.name + " and I am " + person1.age + " years old.")
