// let arr = [1,2,3]
// let arr1 = arr
// arr1.push(10)
// console.log(arr, arr1) // [1,2,3,10] , [1,2,3,10]
// console.log(arr == arr1) // true


// let arr = [1,2,3]
// console.log(arr == [1,2,3]) // false
// console.log([1,2,3] == [1,2,3]) // false

let map = new Map([["kay1", 1], ["kay2", 2], ["kay3", 3]])

console.log(map.get("kay2"))


let set = new Set("hello") // no indexs no duplicates


let arr = [1,2]
let set1 = new Set(arr, arr, [1,2,3], [1,2,3])
console.log(set1)//arr       [1,2,3]  [1,2,3]