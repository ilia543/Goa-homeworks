const car ={
    brand: "BMW",
    model: "BMW_M5",
    year:2024,
}
console.log(car.year , car.brand);

car.color = "white";
console.log(car)

car[2] = 2025;
console.log(car)

delete car.model;
console.log(car)

const car1 ={
    brand: "BMW",
    model: "BMW_M5",
    year:2024,
    owner: {
        neme: "ilia",
        age: 15
    }
}
console.log(car1)