const me = {
    name: "ilia",
    surname: "dzindzibadze",
    age: 15,
    heigth: 170,
}
const melst = ["ilia", "dzindzibadze", 15, 170];

melst[2] = "sigma";



console.log(me.name);
console.log(me.age);

console.log(melst[2]);
console.log(melst[3]);

console.log(me);
me.age = 100;
delete me.name;
console.log(me);