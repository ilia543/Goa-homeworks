let person = {
    1: "firstname",
    2: "secondname",
    3: "age"
}

let names = {
    0: "luka",
    1: "gio",
    2: "nika"
}

console.log(names)


let arr = []

arr[0] = "luka";
arr[1] = "gio";
arr[2] = "nika";

console.log(arr);

// Math.PI - returns math pi constant
// Math.E - returns euler number constant
// Math.floor - rounds down float number to integer
// Math.trunc - removes float part from number
// Math.round - rounds float number to closest integer
// Math.ceil - rounds up float number
// Math.pow - takes 2 values, first number to power and second the power, then powers number to certain value
// Math.random - generates random number between 0 and 1
// Math.abs - returns abosoulte postive part of number
// Math.sqrt - takes square root from number
// Math.max - returns highest value number 
// Math.min - returns lowest value number

console.log(Math.abs(-4.7))

console.log(Math.pow(4, 4))

console.log(Math.ceil(1.001));
console.log(Math.trunc(1.32322));


console.log(Math.round(2.242423))

console.log(Math.PI);

console.log(Math.floor(2.5))
console.log(Math.floor(Math.random() * 10))
console.log(Math.sqrt(16))

console.log(Math.min(100 , 10 , 21 , 124, 364, 2457 ,427 ,35, 68, 356))
console.log(Math.max(100 , 10 , 21 , 124, 364, 2457 ,427 ,35, 68, 356))



const myScoreP = document.getElementById("myScore");
const compScoreP = document.getElementById("compScore");
const winsP = document.getElementById("winner");
const btnDiv = document.getElementById("options");
const computerChoiceP = document.getElementById("compPicked");

const compOptions = ["rock", "paper", "scissors"];

let compScore = 0;
let myScore = 0;

function play(e) {
    const btnId = e.target.id;

    const compChoice = compOptions[Math.floor(Math.random() * 3)]
    
    if(btnId === compChoice) {
        winsP.textContent = "Tie!"
    } else if((btnId === "rock" && compChoice === "paper") || (btnId === "paper" && compChoice === "scissors") || (btnId === "scissors " && compChoice === "rock")) {
        compScore++;
        winsP.textContent = "You lost!";
        compScoreP.textContent = "Comp score: " + compScore;
    }
    
    else {
        myScore++;
        winsP.textContent = "You won!";
        myScoreP.textContent = "My score: " + myScore;
    }
    computerChoiceP.textContent = "Computer choice: " + compChoice;
}

btnDiv.addEventListener("click", play);