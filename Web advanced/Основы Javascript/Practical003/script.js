// task1
const buildNumCube = (num) => num ** 3;
console.log(`Сумма ваших чисел в кубе: ${buildNumCube(2) + buildNumCube(3)}`);



// task2
const minNumPercent = (num) => num * 0.87;

let num = +prompt("Введите число, высчитыаем 13% от вашего числа");
if (isNaN(num)) {
    console.log("Значение задано неверно");
} else {
    console.log(`Размер заработной платы за вычетом налогов равен: ${minNumPercent(num)}`);
}



// task3
function bigNum(firstNum, secondNum, thirdNum) {
    result = 0;
    if (firstNum >= secondNum && firstNum >= thirdNum) {
        result = firstNum
    } else if (secondNum >= firstNum && secondNum >= thirdNum) {
        result = secondNum
    } else {
        result = thirdNum
    }
    return result;
}

console.log(`Большее число: ${bigNum(63, 74, 45)}`);



// task4
const addNum = (firstNum, secondNum) => firstNum + secondNum;
const diffNum = (firstNum, secondNum) => firstNum - secondNum;
const multiNum = (firstNum, secondNum) => firstNum * secondNum;
const divNum = (firstNum, secondNum) => firstNum / secondNum;

console.log(`Сложение: ${addNum(8, 4)}`);
console.log(`Разность: ${diffNum(8, 4)}`);
console.log(`Умножение: ${multiNum(8, 4)}`);
console.log(`Деление: ${divNum(8, 4)}`);