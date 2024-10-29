const p = document.getElementById("t-text");
let time = 5;

const t = setInterval(function() {
    p.textContent = time;
    time--;

    console.log(time);

    if(time < 0) {
        p.textContent = "Time is over!";
        clearInterval(t);
    }
}, 1000);

// const date = new Date();

// date.setFullYear(2022);
// date.setMonth(11);
// date.setDate(25);

// console.log(date.toUTCString());
// console.log(date.toISOString());
// console.log(date.toDateString());

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());