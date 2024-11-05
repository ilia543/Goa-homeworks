function greet(name) {
    if (name == ""){
        console.log("Hello " + "Guest");
    }else {
        console.log("Hello " + name);
    }
}
greet(prompt("enter name : "));


function add_numbers(){
    let numb1 = prompt("enter numb : ");
    let numb2 = prompt("enter numb : ");
    if (Number(numb2) == 0){ // or numb2 === 0
        console.log("enter another number in second numb");
    }else {
        console.log(Number(numb1) + Number(numb2));
    }
}
add_numbers();


function calculate_area(){
    let width = prompt("enter width : ");
    let height = prompt("enter height : ");
    if (width === ""){
        let width = 1;
        console.log(Number(width) * Number(height));
    }else if (height === ""){
        let height = 1;
        console.log(Number(width) * Number(height));
    }else {
        console.log(Number(width) * Number(height));
    }
}
calculate_area();


function convert_temperature(){
    let C = prompt("enter celsius : ");
    console.log(C + " celsius = " + (Number(C) / 9 * 5 + 32) + " Fahrenheit");
}
convert_temperature();


function add_to_shopping_list(){
    let product = prompt("enter product : ");
    let quantity = prompt("enter quantity : ");
    if (quantity === ""){
        console.log("1 " + product);
    }else{
        console.log(quantity + " " + product);
    }
}
add_to_shopping_list();


function power(){
    let numb1 = prompt("enter number : ");
    let numb2 = prompt("enter power : ");
    if (numb2 === ""){
        console.log(Number(numb1) ** 2);
    }else{
        console.log(Number(numb1) ** Number(numb2));
    }
}
power()


function find_max(){
    let arrNumbs =[prompt("enter number : "),prompt("enter number : "),prompt("enter number : ")]
    if (Number(arrNumbs[0]) > Number(arrNumbs[1]) && Number(arrNumbs[0]) > Number(arrNumbs[2])){
        console.log("Max is : " + Number(arrNumbs[0]))
    }else if (Number(arrNumbs[1]) > Number(arrNumbs[0]) && Number(arrNumbs[1]) > Number(arrNumbs[2])){
        console.log("Max is : " + Number(arrNumbs[1]))
    }else if (Number(arrNumbs[2]) > Number(arrNumbs[0]) && Number(arrNumbs[2]) > Number(arrNumbs[1])){
        console.log("Max is : " + Number(arrNumbs[2]))
    }else{
        console.log("numbs are same")
    }
}
find_max()


function sum_of_numbers(){
    let arrNumbs = [1,3,62,45,6,5,672,2446,65,4]
}