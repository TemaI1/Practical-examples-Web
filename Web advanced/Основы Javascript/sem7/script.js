const num = Number(prompt('Введите значение N'));
let i = 1;
while (i <= num) {
    console.log(i++);
}



let pass;
do {
    pass = Number(prompt('Введите пароль в числовом формате'));
} while (pass !== 123);



const num2 = Number(prompt('Введите значение N'));
for (let i = 1; i <= num2; i++) {
    console.log(i);
}



const students = ['Ivanov', 'Petrov', 'Sidorov'];
const studentsPraticeTimes = [20, 135, 87];

let fullPracticeTime = 0;
for (let i = 0; i < students.length; i++) {
    fullPracticeTime = fullPracticeTime + studentsPraticeTimes[i];
    console.log(students[i], ' - practice time: ', studentsPraticeTimes[i]);
}
console.log('Full practice time: ', fullPracticeTime);


// push принимает один или несколько аргументов, которые будут добавлены в конец массива
const students2 = [];
students2.push('Иванов');
students2.push('Петров');
students2.push('Сидоров');
console.log(students2);


// pop позволяет извлечь из массива последний элемент, при этом он удаляется из массива
const students3 = ['Иванов', 'Петров', 'Сидоров'];
const lastStudent = students3.pop();
console.log(lastStudent);
console.log(students3);


// split разделит строку на составляющие и превратит её в массив
const filePath = "C:/projects/bestProject/src/images/background-image.png";
const fileName = filePath.split('/').pop();
console.log(fileName);


// shift извлекает нулевой элемент из массива, при этом сдвигает все оставшиеся элементы 
const students4 = ['Иванов', 'Петров', 'Сидоров'];
const firstStudent = students4.shift();
console.log(firstStudent);
console.log(students4);


// slice поможет скопировать массив целиком, позволяет отрезать от исходного массива часть
const students5 = ['Иванов', 'Петров', 'Сидоров'];
const students6 = students.slice();
students6.push('Белкин');
console.log(students5);
console.log(students6);


// indexOf вычисляет индекс определенного элемента, совпадающего со значением
const students7 = ["Ivanov", "Petrov", "Sidorov", "Alexandrov", "Belkin", "Avdeev"];
if (students7.indexOf("Ivanov") !== -1) {
    console.log("Среди студентов есть Иванов!");
}
const indexOfBelkin = students7.indexOf("Belkin");

