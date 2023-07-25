// task1

const array = [1, 2, 3];
console.log(array[0], array[1], array[2]);

const array2 = [3, 5, 6, 1, 8, 2];
console.log(array2.length);

const array3 = ["a", "b", "c"];
array3[0] = 1;
array3[1] = 2;
array3[2] = 3;
console.log(array3[0], array3[1], array3[2]);


// task2

const array4 = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
    array[i]++;
    console.log(array[i]);
}

const array5 = [5, 7, 3];
array5.push(8);
array5.push(7);
console.log(array5);
array5.pop();
array5.pop();
console.log(array5);

// task3

for (let i = 11; i <= 33; i++) {
    console.log(i);
}

for (let i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

let num = 2;
if (num <= 1000) {
    for (let i = 1; num <= 1000; i++) {
        num = num * 3;
        console.log(`операция номер: ${i}`);
        console.log(`ваше число = ${num}`);
    }
}

// task4

const array6 = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < array6.length; i++) {
    if (array6[i] > 3 && array6[i] < 10) {
        console.log(array6[i]);
    }
}

let result = 0;
for (let i = 2; i < 100; i++) {
    if (i % 2 === 0) {
        result += i;
    }
}
console.log(result);

let result2 = 0;
const array7 = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < array7.length; i++) {
    result2 += array7[i];
}
console.log(result2);