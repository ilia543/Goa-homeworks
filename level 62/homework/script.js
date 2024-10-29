function multiply() {
    let num = prompt("enter numb : ");
    let num1 = prompt("enter numb : ");
    console.log(Number(num) * Number(num1));
}
multiply();


function subtract() {
    let num = prompt("enter numb : ");
    let num1 = prompt("enter numb : ");
    console.log(Number(num) - Number(num1));
}
subtract();


function divide() {
    let num = prompt("enter numb : ");
    let num1 = prompt("enter numb : ");
    console.log(Number(num) / Number(num1));
}
divide();


function fullName() {
    let name = prompt("enter name : ");
    let surname = prompt("enter surname : ");
    console.log("hello " + name + " " + surname);
}
fullName();


function minutesToSeconds() {
    let minutes = prompt("enter minutes : ");
    console.log(minutes + " minutes" + " = " + (Number(minutes) * 60) + " seconds")
}
minutesToSeconds()


function rectangleArea() {
    let lengthArr = prompt("enter length : ")
    let widthArr = prompt("enter width : ")
    console.log("rectangle area = " + Number(lengthArr) * Number(widthArr))
}
rectangleArea()


function concatenateStrings() {
    let Str1 = prompt("enter word : ")
    let Str2 = prompt("enter word : ")
    console.log(Str1 + Str2)
}
concatenateStrings()


function circumference() {
    let radius = prompt("enter radius : ")
    console.log(Number(radius) * Math.PI)
}
circumference()


function nextNumber() {
    let number = prompt("enter number : ")
    console.log(Number(number) + 1)
}
nextNumber()
