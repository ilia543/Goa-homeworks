const obj = [{name: 'lasha', age: 30}, {name: 'merabi', age: 15}]


for (let i = 0; i < objects.length; i++) {

    let obj = objects[i];

    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

console.time()