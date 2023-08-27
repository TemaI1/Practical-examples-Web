const divElemen = document.querySelector('div');
const paragraphElement = document.createElement('p');
paragraphElement.textContent = "My text from js";
divElemen.appendChild(paragraphElement);

paragraphElement.style.color = 'white';
paragraphElement.style.backgroundColor = 'black';
paragraphElement.style.padding = '10px';
paragraphElement.style.width = '250px';
paragraphElement.style.textAlign = 'center';

paragraphElement.setAttribute('class', 'pForStyle')





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
    const values = arguments;
    let maxValue = -Infinity;
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};

const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);

const maxTimeFromGroup1 = findMax(...group1PracticeTime);
console.log(maxTimeFromGroup1); // 160

const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140

const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160





function findMax(...values) {
    return values.reduce((acc, value) => {
        if (value > acc) return value;
        return acc;
    }, -Infinity);
};

const group3PracticeTime = studentsGroup1PracticeTime.map((student) =>
    student.practiceTime);
const group4PracticeTime = studentsGroup2PracticeTime.map((student) =>
    student.practiceTime);

const maxTimeFromGroup3 = findMax(...group1PracticeTime);
console.log(maxTimeFromGroup1); // 160

const maxTimeFromGroup4 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140

const bothGroupsTime2 = [...group1PracticeTime, ...group2PracticeTime];
const maxTimeBothGroups2 = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160

const saveFullNameInDB = (firstName, lastName, ...additionals) => {
    saveFirstName(firstName);
    saveLastName(lastName);
    saveAdditionals(additionals);
}





const divElement = document.querySelector('div')
console.log(divElement.childNodes.length) // 7
console.log(divElement.children.length) // 3

Array.from(divElement.childNodes).forEach((childNode) => {
    console.log('childNode "%s" типа "%d"', childNode.nodeName, childNode.nodeType)
});

[...divElement.children].forEach((child) => {
    console.log('child "%s" типа "%d"', child.nodeName, child.nodeType)
}); 
