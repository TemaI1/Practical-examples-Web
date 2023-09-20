const studentsGroup1PracticeTime = [
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
const studentsGroup2PracticeTime = [
    {
        firstName: "Mankov",
        practiceTime: 87
    },
    {
        firstName: "Kistin",
        practiceTime: 133
    },
    {
        firstName: "Kotlyarov",
        practiceTime: 140
    },
    {
        firstName: "Peskov",
        practiceTime: 10
    },
];

function findMax() {
    const values = arguments; // переменная доступная внутри каждой функции, содержит в себе все аргументы, переданные в функцию
    let maxValue = -Infinity;
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};

const group1PracticeTime =
    studentsGroup1PracticeTime.map((student) => student.practiceTime);
console.log(group1PracticeTime);

const group2PracticeTime =
    studentsGroup2PracticeTime.map((student) => student.practiceTime);
console.log(group2PracticeTime);

const maxTimeFromGroup1 = findMax(...group1PracticeTime);
console.log(maxTimeFromGroup1); // 160


const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140

const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
console.log(bothGroupsTime);
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160




const student = {
    name: "Alex",
    age: "20"
};

const getYear = (age, currenYear) => {
    return currenYear - age;
};
console.log(getYear(student.age, 2023));

const addField = (object, key, value) => {
    object[key] = value;
    return object;
}
const updateStudent = addField(student, "lastName", "Belkin");
console.log(student);
console.log(updateStudent);

const addNewField = (object, key, value) => {
    return {
        ...object,
        [key]: value
    }
}
const updateNewStudent = addNewField(student, "precticalTime", "214");
console.log(student);
console.log(updateNewStudent);