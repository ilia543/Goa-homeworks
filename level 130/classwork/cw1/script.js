let mybutton = document.getElementById("mybutton");

mybutton.addEventListener('click', async function func() {
    let res = await fetch('https://dog.ceo/api/breeds/image/random');
    let obj = await res.json();
    document.body.innerHTML += `<img src="${obj.message}" alt="" width="300px">`
})