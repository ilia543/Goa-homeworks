function task7() {
    const delay1 = Math.floor(Math.random() * 3000) + 1000;
    const delay2 = Math.floor(Math.random() * 3000) + 1000;

    return new Promise(resolve => {
        setTimeout(() => {
            resolve("First");
        }, delay1);
    }).then(message => {
        console.log(message);
        return new Promise(resolve => setTimeout(() => resolve("Second"), delay2));
    }).then(console.log);
}

task7();
