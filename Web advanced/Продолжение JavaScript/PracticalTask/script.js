// task 1

// const s = 5;
// const n = 13;

// const array = [3, 10, 300, 15, 5];

// let result = 0;

// for (let i = 0; i < array.length; i++) {
//     if (n > array[i] && array[i] > result) {
//         result = array[i];
//     }
// }

// console.log(result);

// task 2

// const s = "fheriherffazfszkisrrs";
// const sh = 'sheriff';

// let result = Infinity;

// for (let i = 0; i < sh.length; i++) {
//     let count = s.split(sh[i]).length - 1;
//     if (count < result) {
//         result = count;
//     }
// }

// console.log(result);

// task 3

// const n = 5;

// const arrayOne = [1, 4, 2, 2, 4];
// const arrayTwo = [1, 4, 4, 2, 2];

// let minA = arrayOne[0];
// let maxA = arrayOne[0];

// let minB = arrayTwo[0];
// let maxB = arrayTwo[0];

// for (let i = 0; i < n; i++) {
//     if (n === 1) console.log("YES");
//     if (n === 2) console.log("YES");

//     if (minA < arrayOne[i]) minA = arrayOne[i];
//     if (maxA > arrayOne[i]) maxA = arrayOne[i];
//     if (minB < arrayTwo[i]) minB = arrayTwo[i];
//     if (maxB > arrayTwo[i]) maxB = arrayTwo[i];
//     if (minA !== minB || maxA !== maxB) console.log("NO");
// }

// task 4

let n = 5;
const m = 2;

const mOne = 1;
const mTwo = 2;

let countmTwo = m;
let countmOne = m;

let k = 0;


if (n <= ((mOne * m) + (mTwo * m))) {
    while (n >= 0) {
        if (countmTwo >= 0) {
            n -= mTwo;
            countmTwo--;
            k++;
        } else if (countmOne >= 0) {
            n -= mOne;
            countmOne--;
            k++;
        } else {
            console.log(-1);
        }
    }
} else {
    console.log(-1);
}
console.log(k);



