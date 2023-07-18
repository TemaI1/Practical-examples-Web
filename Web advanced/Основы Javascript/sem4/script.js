// task1

// let age = prompt("Сколько вам лет?");
// if (age <= 0) {
//     alert("Ввели неверное значение");
// } else if (age === 1) {
//     alert("Ваш возраст год");
// } else if (age >= 2 && age <= 4) {
//     alert(`Вам ${age} года`);
// } else {
//     alert(`Вам ${age} лет`);
// }

// let name = prompt("Ваше имя?");
// alert(`Добро пожаловать на сайт ${name}`);

// task2

// let a = 13;
// let b = 5;
// alert(a % b) 3

// let c;
// alert(c) undefined

// alert("abc" * 3) NaN

// alert(1 / 0); infinity
// alert(-1 / 0); -infinity

// alert("2" * "3") 6

// task3

// let a = "2";
// let b = "3";

// console.log(a + b);

// let firstNum = +prompt("Введите первое число");
// let secondNum = Number(prompt("Введите второе число"));

// console.log(`сумма ${firstNum + secondNum}`);
// console.log(`разность ${firstNum - secondNum}`);
// console.log(`деление ${firstNum / secondNum}`);
// console.log(`умножение ${firstNum * secondNum}`);
// console.log(`остаток ${firstNum % secondNum}`);

// task4

// console.log(String(true)); true
// console.log("a" + true); atrue
// console.log(Number(true)); 1
// console.log(true + 1); 2
// console.log(true + true); 2
// console.log(true - true); 0
// console.log(String(true) + Number(true)); true1

// task5

let num = 5;
for (let i = 0; i < num; i++) {
    console.log(i);
}

let test1 = 7;
let test2 = 5;

if (test1 == test2) {
    console.log("Равны");
} else {
    console.log("Отличаются");
}

if (test1 > test2) {
    console.log("первое число больше");
} else {
    console.log("второе число больше");
}

if (test1 < 15) {
    console.log("число меньше 15");
} else {
    console.log("число больше 15");
}