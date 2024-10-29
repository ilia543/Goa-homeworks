
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
    if (name === '' || email === '' || pass === '') {
        alert("pleas fill all boxes");
    } 
    else {
        alert(name);
        alert(email);
        alert(pass);
    }
}

btn.onclick = valiuDateForm;