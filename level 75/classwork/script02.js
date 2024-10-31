const form = document.querySelector("form");
const tbody = document.querySelector("tbody");


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstname = form.firstname.value;
    const email = form.email.value;
    const pass = form.pass.value;

    // tbody.innerHTML = "<p>" + firstname + "</p>";
    // tbody.innerHTML = `<p>${firstname}</p>`;

    tbody.innerHTML += `
        <tr>
            <td>${firstname}</td>
            <td>${email}</td>
            <td>${pass}</td>
        </tr>
    `;

})