function func1(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

function func2(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback("Process completed.");
    }, 2000);
}

function func3(numbers, callback) {
    setTimeout(() => {
        const squaredNumbers = numbers.map(num => num * num);
        callback(squaredNumbers);
    }, 2000);
}

function func4(color, callback) {
    setTimeout(() => {
        document.body.style.color = color;
        callback();
    }, 2000);
}

function func5() {
    const name = prompt("Enter your name:");
    setTimeout(() => {
        alert(`Congratulations, ${name}! You helped complete the task.`);
    }, 3000);
}
