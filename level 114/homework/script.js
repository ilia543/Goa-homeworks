class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return (this.celsius * 9/5) + 32;
    }
}

const temp = new Temperature(25);
console.log(`Temperature in Fahrenheit: ${temp.fahrenheit}`);

////////////////////////////////////////////////////

class Student {
    constructor(score) {
        this.score = score;
    }

    get grade() {
        if (this.score >= 80) return 'A';
        if (this.score >= 60) return 'B';
        if (this.score >= 40) return 'C';
        if (this.score >= 20) return 'D';
        return 'F';
    }
}

let student1 = new Student(85);
console.log(`Grade: ${student1.grade}`);

let student2 = new Student(72);
console.log(`Grade: ${student2.grade}`);

let student3 = new Student(100);
console.log(`Grade: ${student3.grade}`);
