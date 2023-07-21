// task1

function sayHelloName(firstName, secondName, age) {
    console.log(`Привет ${firstName} ${secondName} с возрастом ${age}`);
}
sayHelloName("Артем", "Май", 25);



function squared(num) {
    return num ** 2;
}
console.log(squared(5));



const secondSquared = (num) => num ** 2;
console.log(secondSquared(3));



let num = -5;
(num >= 0) ? console.log('+++') : console.log('---');



function plusMinus(num) {
    console.log((num >= 0) ? '+++' : '---');
}
plusMinus(5);

// task2

function sum(firstNum, secondNum, thirdNum) {
    return firstNum + secondNum + thirdNum;
}
console.log(sum(4, 10, 6));



const secondSum = (firstNum, secondNum, thirdNum) => firstNum + secondNum + thirdNum;
console.log(secondSum(11, 9, 20));



function func(num = 5) {
    console.log(num * num);
}
func(2);
func(3);
func();

// task3

const squaredRoot = (num) => Math.sqrt(num);
console.log(squaredRoot(9));



function searchMinimum(firstNum, secondNum) {
    console.log((firstNum <= secondNum) ? `min: ${firstNum}` : `min: ${secondNum}`);
}
searchMinimum(11, 9);

// task4

function dayWeek(dayNum) {
    if (dayNum === 1) {
        return "Пн";
    } else if (dayNum === 2) {
        return "Вт";
    } else if (dayNum === 3) {
        return "Ср";
    } else if (dayNum === 4) {
        return "Чт";
    } else if (dayNum === 5) {
        return "Пт";
    } else if (dayNum === 6) {
        return "Сб";
    } else if (dayNum === 7) {
        return "Вс";
    } else {
        return "Такого дня недели не существует";
    }
}
console.log(dayWeek(4));



function sayHelloAndTime(name) {
    var now = new Date();
    console.log(`Привет ${name} сейчас ${now}`);
}
sayHelloAndTime("Artem");