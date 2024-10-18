// let age = Number(prompt("enter your age"));

// if (age < 18) {
//     console.log("you are kid");
//     alert("you are kid");
// }else {
//     console.log("you are adult");
//     alert("you are adult");
// }

// for (let i = 0; i < 30; i += 1){
//     console.log(i);
// }

// let x = 0;

// while (x < 10){
//     x += 1;
//     console.log(x)
// }

// let list = [];
// list.push("goa")


let list1 = [];
for (let i = 0; i < 31; i +=1){
    list1.push(i);
}
let list2 = [];
for (let x = 0; x < list1.length; x ++){
    if (x % 2 === 0){
        list2.push(x);
    }else{

    }
}
console.log(list1);
console.log(list2);