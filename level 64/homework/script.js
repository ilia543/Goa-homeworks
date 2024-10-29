const form = document.getElementById("registerform");
const buttonSumbit = document.getElementById("sumbit");

function register(){
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const radio1 = form.elements.radio1.value;
    const radio2 = form.elements.radio2.value;

    if (name === "" || email === "" || password === "" || length(password) <= 8){
        alert("empty")
    }
    // else if (length(password) <= 8){
    //     alert("password is too short");
    // }
    else{
        alert("your inpormation " + name + " " + email + " " + password);
    }

}
buttonSumbit.onclick = register;