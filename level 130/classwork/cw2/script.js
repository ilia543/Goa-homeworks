let mybutton = document.getElementById('mybutton');

mybutton.addEventListener('click', async function func() {
    let res = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    let obj = await res.json();

    document.body.innerHTML += `<p>${obj.joke}</p>`
})


async function func1() {
    let res = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    let obj = await res.json();

    document.body.innerHTML += `<p>${obj.joke}</p>`
}
func1()