const car = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometer: 0
};
console.log(car.model);
car.model = "BMW";
console.log(car.model);



function haveRoadTrip(myСar, distance) {
    myСar.odometer += distance;
}
haveRoadTrip(car, 150);
console.log(car.odometer);



const car2 = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometer: 0,
    startEngine: function () {
        console.log("Engine started");
    }
};

car2.startEngine();

for (const key in car2) {
    console.log(key + ": " + car2[key]);
}

console.log('Все ключи объекта car2');
for (const key in car2) {
    console.log(key);
}

console.log('Все значения объекта car2');
for (const key in car2) {
    console.log(car2[key]);
}



const group1 = {
    "Ivanov": {
        practicePlace: "ldu-1",
        practiceTime: 56
    },
    "Petrov": {
        practicePlace: "kamaz",
        practiceTime: 120
    },
    "Sidorov": {
        practicePlace: "ldu-1",
        practiceTime: 148
    },
    "Belkin": {
        practicePlace: "GosDZU",
        practiceTime: 20
    },
    "Avdeev": {
        practicePlace: "LPK",
        practiceTime: 160
    }
}

// Object.keys позволяет получить из объекта все его ключи первого уровня и положить их в массив
const group1Students = Object.keys(group1);
console.log(group1Students);

// Object.values позволяет получить значения из объекта в виде массива
console.log(Object.values(car));

// Object.entries позволяет получить из объекта как ключи, так и значения в виде одного массива массивов
console.log(Object.entries(car));



const studentsPracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];

// map позволяет проитерировать весь массив, и создать на основе него новый массив
const dataForTable = studentsPracticeTime.map((student) => {
    if (student.practiceTime < 120) {
        return {
            Student: student.firstName,
            Practice: "Not passed"
        };
    } else {
        return {
            Student: student.firstName,
            Practice: "Passed"
        };
    }
});

// table выводит данные в виде таблицы
console.table(dataForTable);



// filter используется для фильтрации элементов массива по какому-нибудь правилу, которое задаете вы сами
const studentsPassedPractice = studentsPracticeTime.filter((student) => {
    if (student.practiceTime < 120) return false
    return true
});
console.log(studentsPassedPractice);



let totalTime = 0;
for (let i = 0; i < studentsPracticeTime.length; i++) {
    totalTime = totalTime + studentsPracticeTime[i].practiceTime;
}
console.log(totalTime + " часов практики отработали студенты");

// reduce он проходится по всему массиву и позволяет собрать и обработать его значение в новую форму
const totalTime2 = studentsPracticeTime.reduce((acc, student) => {
    return acc + student.practiceTime;
}, 0);
console.log(totalTime2);



// some используется, когда нам нужно проверить, что в массиве есть хоть один подходящий нам элемент
const isSomebodyPassedPractice = studentsPracticeTime.some((student) => {
    console.log(student.firstName);
    return student.practiceTime >= 120;
});
console.log(isSomebodyPassedPractice);



// find позволяет найти элемент в массиве по заданному условию
const studentBelkin = studentsPracticeTime.find((student) => {
    return student.firstName === "Belkin";
});
console.log(studentBelkin.practiceTime);



const studentFirst = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
};
const { firstName, lastName, age } = studentFirst;



const studentsSecond = ["Ivanov", "Petrov", "Belkin"];
const [student1, student2, student3] = studentsSecond;
