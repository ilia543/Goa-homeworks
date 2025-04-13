const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
  { name: "ანა", age: 25 },
  { name: "ნიკა", age: 17 },
  { name: "მარი", age: 30 },
  { name: "გიორგი", age: 15 },
  { name: "ლევანი", age: 22 },
];

console.log("====== forEach მაგალითები ======");


numbers.forEach(num => console.log(num));


numbers.forEach(num => console.log(num * 2));


numbers.forEach(num => {
  if (num % 2 === 0) console.log("ლუწი:", num);
});


users.forEach(user => console.log("მომხმარებელი:", user.name));


let count = 0;
users.forEach(() => count++);
console.log("მომხმარებელთა რაოდენობა:", count);


console.log("====== map მაგალითები ======");


const doubled = numbers.map(num => num * 2);
console.log(doubled);


const userNames = users.map(user => user.name);
console.log(userNames);


const numberTexts = numbers.map(num => `რიცხვი: ${num}`);
console.log(numberTexts);


const mappedUsers = users.map(user => ({
  name: user.name,
  isAdult: user.age >= 18
}));
console.log(mappedUsers);


const withIds = users.map((user, index) => ({ id: index + 1, ...user }));
console.log(withIds);


console.log("====== filter მაგალითები ======");


const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


const adults = users.filter(user => user.age >= 18);
console.log(adults);


const greaterThanFive = numbers.filter(num => num > 5);
console.log(greaterThanFive);


const startsWithN = users.filter(user => user.name.startsWith("ნ"));
console.log(startsWithN);


const complexFilter = numbers.filter(num => num % 2 === 0 && num < 6);
console.log(complexFilter);


console.log("====== reduce მაგალითები ======");


const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("ჯამი:", sum);


const evenSum = numbers.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);
console.log("ლუწების ჯამი:", evenSum);


const max = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
console.log("მაქსიმუმი:", max);


const avgAge = users.reduce((acc, user, _, arr) => acc + user.age / arr.length, 0);
console.log("საშუალო ასაკი:", avgAge);


const allNames = users.reduce((acc, user) => acc + user.name + ", ", "");
console.log("ყველა სახელი:", allNames.slice(0, -2));
