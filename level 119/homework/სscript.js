function studentinmap(students) {
    const studentMap = new Map();

    students.forEach(student => {
        studentMap.set(student.name, student.score);
    });

    return studentMap;
}

const students = [
    { name: 'ანა 47ქრომოსომა', score: 15 },
    { name: 'გიო (ნიგერი)', score: 72 },
    { name: 'ლიზი (20ლ)', score: 48 },
    { name: 'ნიკა ტიკტოკერი', score: 88 },
    {name: 'სიგმაბოი', score: 999},
    {name: 'მე', score: 9999},
    {name: 'სკიბიდიშრეკი', score: 69},
    {name: 'აზეთილიტოილეტ', score: -69}
];

const result = studentinmap(students);
console.log(result);


function func(studs) {
    const map2 = new Map();

    studs.forEach((score, name) => {
        map2.set(name, score + 5);
    });

    return map2;
}

let map1 = new Map([["ნი(გ)კა", 75] ,["შაურმა", 15] ,["აღარ მაქ მეტი ფანტაზია", -100]]);


console.log(func(map1));