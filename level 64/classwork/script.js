
// confirm("are you chad?");

// function clck() {
//     let click = confirm("are you adult?")
//     if (click == true) {
//         alert("you are adult")
//     }
//     else {
//         alert("you are kid")
//     }
// }

const form = document.getElementById("formjs");
const btn = document.getElementById("btn");

function valiuDateForm() {
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const pass = form.elements.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(pass);
    if (name.value === '' || email.value === '' || pass.value === '') {
        alert("pleas fill all boxes");
        return;
    } 
    else {
        console.log(name.value);
        console.log(email.value);
        console.log(pass.value);
    }
}

btn.onclick = valiuDateForm;