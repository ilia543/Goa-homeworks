// Array Destructuring
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

// Object Destructuring
const obj = { x: 10, y: 20 };
const { x, y } = obj;
console.log(x, y);

// Renaming Variables
const obj2 = { firstName: 'John', lastName: 'Doe' };
console.log(first, last);

// Skipping Values
const arr2 = [1, 2, 3, 4, 5];
const [first, , , , last] = arr2;
console.log(first, last);

// Destructuring in Loops
const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
for (const { name, age } of users) {
  console.log(`${name} is ${age} years old.`);
}

// Combining Destructuring and Rest Syntax
const arr3 = [1, 2, 3, 4, 5];
const [firstElem, ...rest] = arr3;
console.log(firstElem);
console.log(rest);

// Skipping Elements
const arr4 = [1, 2, 3, 4, 5];
const [firstSkipped, , , , lastSkipped] = arr4;
console.log(firstSkipped, lastSkipped);

// Using Destructuring with Map and Filter
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const adults = people.filter(({ age }) => age >= 30);
console.log(adults);

// Destructuring Arrays with Mixed Types
const arr5 = [42, { name: 'John', age: 30 }, true];
const [num, { name, age }, bool] = arr5;
console.log(num, name, age, bool);

// Manual Destructuring Function
function manualDestructuring(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}
const sampleObject = { a: 10, b: 20, c: 30 };
const values = manualDestructuring(sampleObject);
console.log(values);
