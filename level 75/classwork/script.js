const form = document.getElementById("registerform");
// const buttonSumbit = document.getElementById("sumbit");
const tbody = document.querySelector("tbody")

form.addEventListener("sumbit", function(e){
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const AllValues = [name, email, password];

    const tr = document.createElement("tr");

    for (let i = 0; i < AllValues.length; i++){
        const td = document.createElement("td");
        td.textContent = data[i];
        tr.appendChild(td);
    }

    form.name.value = "";
    form.email.value = "";
    form.pass.value = "";

    tbody.appendChild(tr);
    
})
