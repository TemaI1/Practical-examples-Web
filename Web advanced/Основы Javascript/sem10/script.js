// task1

// const daysWeek = {
//     1: "Пн",
//     2: "Вт",
//     3: "Ср",
//     4: "Чт",
//     5: "Пт",
//     6: "Сб",
//     7: "Вс"
// };
// console.log(daysWeek[2]);



// const user = {
//     name: "Artem",
//     surname: "May",
//     age: 25
// };
// console.log(`${user.name} - ${user.surname} - ${user.age}`);



// user.secondName = prompt("Введите secondName");
// console.log(user);



// delete user.surname;
// console.log(user);

// task2

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const daysWeek2 = {};
// for (let i = 0; i < arr1.length; i++) {
//     daysWeek2[arr1[i]] = arr2[i];
// }
// console.log(daysWeek2);



// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// };

// for (const key in obj) {
//     obj[key] **= 2; // obj[key] = obj[key] ** 2;
// }
// console.log(obj);

// task3

// const obj2 = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9
//     }
// }

// let symObj2 = 0;
// for (const key in obj2) {
//     for (const key2 in obj2[key]) {
//         symObj2 += obj2[key][key2];
//     }
// }
// console.log(symObj2);

// console.log(
//     Object.values(obj2)
//         .map(item => Object.values(item).reduce((sum, a) => sum + a, 0))
//         .reduce((partSum, a) => partSum + a, 0)
// );

// task4

const riddles = {
    question: {
        quest1: "Зимой и летом...",
        quest2: "Сто одёжек..."
    },
    answer: {
        answer1: "елка",
        answer2: "капуста"
    }
};

function askQuestion() {
    alert(riddles.question.quest1);
    if (prompt("Ответ на закадку: ") === riddles.answer.answer1) {
        alert("Молодец");
    } else {
        alert("Неправильный  ответ");
    }

    alert(riddles.question.quest2);
    if (prompt("Ответ на закадку: ") === riddles.answer.answer2) {
        alert("Молодец");
    } else {
        alert("Неправильный  ответ");
    }
}

askQuestion();