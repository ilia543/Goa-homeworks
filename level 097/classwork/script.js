// let arr = [1,2,3,4,5,7,9,0]

// for (let i of arr){
//     console.log(i)
// }


// const obj = {
//     name: "ilia",
//     surname: "dzindzibadze"
// }

// for(let i in obj){
//     console.log(obj[i])
// }


const obj = {
    name: "ilia",
    surname: "dzindzibadze"
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

for (const key in obj) {
    if (obj[key].length < 5) {
        console.log(`${key}: ${obj[key]}`);
    }
}