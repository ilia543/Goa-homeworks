let age = prompt("enter your age : ")
if (Number(age) < 18){
    console.log("you are minor")
    console.log("to become an adult you need " + 18 - Number(age) + " years")
}else{
    console.log("you are an adult")
    console.log("you become an adult " +  Number(age) - 18 + " years ago")
}