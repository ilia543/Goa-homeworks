// 1 Get Length: Create an array with 5 items. Log the length of the array.
const arr1 = [1,"gadsfare",255,4574,3143,3,43,"fagadf","aggae","gaehwjyrhtdfgd"]
console.log(arr1.length)
//გამოითვლის ლისტისსიგრძეს


// 2 Convert to String: Convert the same array to a string using toString() and log the result.
const arr2 = [1,2,3,4,5,6,7,8,9,0]
console.log(arr2.toString())
//გადაყავს ყველაფერი სტრინგში


// 3 Access Element: Use the at() method to access the second element and log it
const arr3 = ["gadse",74,43,3,"fa","aae",15,"gaehwjyrd"]
console.log(arr3.at(2))
//გამოაქვს  at()-ში ჩასმული რიცხვის ინდექსზე არსებული ელემენტი


// 4 Join Elements: Use join() to combine the array elements with - between them.
const arr4 = [1,2,3,4,5,"10"]
console.log(arr4.join(" + "))
//ლისტის თითოეულ ელემენტთან სვამს join()-ში ჩასმულ სტრინგს


// 5 Push & Pop: Add two new elements to the array using push(), then remove the last element using pop().
let arr5 = []
arr5.push(1,2)
arr5.push(3)
arr5.push(4)
arr5.push(5)
arr5.pop()
arr5.pop()
console.log(arr5)
//push()ამატებს სიის ბოლო ადგილას მასში ჩასმულ ელემენტს, pop() შლის სისტის ბოლო ელემენტს


// 6 Shift Element: Create an array and remove the first element using shift().
let arr6 = [1,2,3,"goa","chad"];
arr6.shift();
console.log(arr6)
//shift() შლის ლისტის პირველ ელემენტს


// 7 Unshift Element: Add a new element at the beginning using unshift().
let arr7 = []
arr7.unshift(1)
arr7.unshift(2)
arr7.unshift(3)
arr7.unshift(4,5)
arr7.unshift(6)
console.log(arr7)
//unshift() სვამს მასში შეყვანილ ელემენტს ლისტის დასაწყისში


//Delete Element: Use the delete operator to remove the second element. Log the array and observe the result.
let arr8 = ["i","l","i","a"]
delete arr8[3]
console.log(arr8)
//delete შლის ლისტის კონკრეტულ ელემენტს რომელსაც მივუთითებთ


//Concatenate Arrays: Create two arrays and use concat() to merge them.
let arr9 = [1,2,3,4,5]
let arr10 =[6,7,8,9,10]

let newarr1_10 = arr9.concat(arr10)
let newarr10_1 = arr10.concat(arr9)
console.log(newarr10_1 , newarr1_10)
//conact() უმატებს ერთ ლისტს მეორეს


//Explore Unshift & Length: After using unshift(), log the new length of the array.
let arr11 = [1,2,3,4,5,6,7,8,9]
arr11.unshift("a")
arr11.unshift("i")
arr11.unshift("l")
arr11.unshift("i")
console.log(arr11.length)
//unshift() მასში ჩასმულ სიმბოლოებს უმატებს ლისტს დასაწყისში

//Find Index: Create an array with repeated values. Use indexOf() to find the first occurrence of an element.
let arr12 = ["sigma","chad","goa","batonizauri","goa","batoninika"]
console.log(arr12.indexOf("goa"))
//indexOf პოულობს მაში ჩასმული ცვლადის ინდექსს, თუ ერთიდაიგივე რამდენიმე ცვლადია პოულობს იმ ცვლადის ინდექსს რომელიც პირველი გვხვდება


//Find Last Index: Use lastIndexOf() to find the last occurrence of the same element.
let arr13 = ["sigma","chad","goa","batonizauri","goa","batoninika"]
console.log(arr13.lastIndexOf("goa"))
//lastIndexOf პოულობს მაში ჩასმული ცვლადის ინდექსს, თუ ერთიდაიგივე რამდენიმე ცვლადია პოულობს იმ ცვლადის ინდექსს რომელიც ბოლო გვხვდება


//Check Inclusion: Use includes() to check if a specific element exists in the array.
let arr14 = [1,2,3,4,5,6,7,8,9,0]
console.log(arr14.includes(4))
//includes() გვეუბნება არის თუ არა ლისტში მასში მითითებული ცვლადი


//Sort Strings: Create an array of strings and sort them using sort().
let arr15 = ["ilia","goa","chad","sigma", "a",1,432,3]
console.log(arr15.sort())
//sort() ასორტირებს რიცხვებს ზრდადობით ხოლო სტრინგებს ალფავიტის მიხედვით


//Reverse Array: Use reverse() on a sorted array and log the result.
let arr16 = [1,2,3,4,5,6,7,8,9,0]
console.log(arr16.reverse())
//reverse() ატრიალებს ლისტს 1, 2, 3, 4, 5 -> 5, 4, 3, 2, 1 ესე


//slice()
let arr17 = [1,2,3,4,5,6,7,8,9,0]
console.log(arr17.slice(6))

//slice() ლისტს ჩამოაჭრის პირველ იმდონ ცვლადს რამდენსაც მივუთითებთ