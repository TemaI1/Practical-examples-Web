// Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. 
// Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
    const result = [...arr1, ...arr2];
    return result;
}
console.log(mergeArrays([2, 4, 5], [3, 7, 8]));

const mergeArrays2 = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays2([1, 2, 3], [4, 5, 6]));

array1 = [5, 7, 8]
array2 = [3, 2, 7]
array1.push(...array2);
console.log(array1);



// Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

function removeDuplicates(...arguments) {
    // return arguments.filter(item => item > 3);
    return arguments.filter((value, index) => arguments.indexOf(value) === index);
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5, 5, 5, 2, 2));



// Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве
// аргумента и возвращает новый массив, содержащий только четные числа.
const getEvenNumbers = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

const getEvenNumbers2 = (params) => params.filter((params) => params % 2 === 0);

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Ожидаемый результат: [2, 4, 6]
console.log(getEvenNumbers2([10, 15, 20, 25, 30])); // Ожидаемый результат: [10, 20, 30]



// Напишите функцию calculateAverage, которая принимает массив чисел в качестве
// аргумента и возвращает среднее значение этих чисел.
const calculateAverage = (array) => array[Math.floor(array.length / 2)];

const calculateAverage2 = (params) => params.reduce((acc, num) => acc + num, 0) / params.length;

console.log(calculateAverage([1, 2, 3, 4, 5])); // Ожидаемый результат: 3
console.log(calculateAverage2([10, 20, 30, 40, 50])); // Ожидаемый результат: 30



// Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве
// аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

const capitalizeFirstLetter = (params) => params.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(capitalizeFirstLetter('hello world')); // Ожидаемый результат: 'Hello World'
console.log(capitalizeFirstLetter('javascript is awesome')); // Ожидаемый результат: 'Javascript Is Awesome'



// Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами:
// add и subtract.Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не напрямую.

function createCalculator(num) {
    let value = num;
    return {
        add: (num) => { value += num },
        subtract: (num) => { value -= num },
        result: () => value
    }
}
const calc = createCalculator(5)
calc.add(10);
console.log(calc.result());
calc.subtract(3);
console.log(calc.result());



// Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, 
// которая будет выводить приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

function createGreeting(name) {
    return function () {
        console.log("Hello, " + name);
    };
}
const greeting = createGreeting('John');
greeting();



// Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля 
// в качестве аргумента и возвращает функцию для проверки введенного пароля. 
// Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, 
// и false в противном случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

const createPasswordChecker = (num) => {
    return (pass) => (pass.length < num);
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат: false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true