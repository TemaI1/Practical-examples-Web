// task1

let num1 = Number(prompt("Введите первое число"));

if (num1 <= 1) {
    console.log("Ваше число меньше или равно еденицы");
} else {
    console.log("Что то пошло не так");
}

let num2 = Number(prompt("Введите второе число"));

if (num2 >= 3) {
    console.log("Ваше число больше двойки");
} else {
    console.log("Ваше число меньше тройки");
}


// task2

let test = true;

(test === true) ? console.log('+++') : console.log('---');

// task3

let day = 17;

if (day <= 10) {
    console.log("Первая часть");
} else if (day > 10 && day <= 20) {
    console.log("Вторая часть");
} else if (day > 20 && day <= 31) {
    console.log("Третья часть");
} else {
    console.log("Что то пошло не так");
}

// task4

let myNum = Number(prompt("Введите число"));

let unit = myNum % 10;

let doz = Math.floor(myNum / 10 % 10);

let hund = Math.floor(myNum / 100 % 10);

console.log(`сотен: ${hund}, десятков: ${doz}, единиц: ${unit}`);