// task1

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else if (i % 2 !== 0) {
        console.log(`${i} - нечетное число`);
    }
}

// task2

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// task3

const array = [];
for (let i = 0; i <= 5; i++) {
    array.push(Math.floor(Math.random() * (9 - 1) + 1));
}
console.log(array);

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("Сумма элементов массива: " + sum);

let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (min >= array[i]) {
        min = array[i];
    }
}
console.log("Минимальное число массива: " + min);

let search = 3;
for (let i = 0; i < array.length; i++) {
    if (search === array[i]) {
        console.log(`число ${search} в этом массиве, под индексом ${array.indexOf(search)}`);
    }
}

// task4

for (let i = 0; i <= 20; i++) {
    console.log("x".repeat(i));
}