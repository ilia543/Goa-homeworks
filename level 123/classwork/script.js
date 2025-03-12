
const task1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000);
});

task1.then(console.log);


const task2 = new Promise((_, reject) => {
    reject(new Error("Task 2 failed"));
});

task2.catch(error => console.error(error.message));



const task3 = Promise.resolve(5)
    .then(num => num * 2)
    .then(result => console.log(result));


function task4() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("First");
        }, 2_000);
    }).then(message => {
        console.log(message);
        return new Promise(resolve => setTimeout(() => resolve("Second"), 1_000));
    }).then(console.log);
}

task4();

