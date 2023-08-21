// 1. На рисунке выше изображен двумерный массив (матрица). Буквами «г» обозначена
// главная диагональ, буквами «п» - побочная. Размер матрицы - N на N элементов
// задается пользователем (ширина и высота всегда одинаковые). Необходимо найти
// сумму элементов, лежащих на побочной диагонали используя один оператор цикла.

// запрос пользователю
let num = Number(prompt("Введите количество элементов в массиве"));

// создаем массив с N элементами
let array = [];

for (let i = 0; i < num; i++) {
    array[i] = [];
    for (let j = 0; j < num; j++) {
        array[i][j] = j + 1;
    }
}

// выводим созданный массив
console.log(array);

// находим сумму элементов на побочной диагонали
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i][array.length - (i + 1)]
}

// выводим сумму элементов на побочной диагонали
console.log(sum);



// 2. Дано два числа. Первое число больше второго. Написать алгоритм, определяющий
// делится ли первое число на второе нацело без использования операций «/», «mod»,
// «%». Операцию округления также запрещено использовать.

// создаем две переменные со значениями
let firstNum = 9;
let secondNum = 1;

// создаем результирующую переменную, задаем максимальное значение этой переменной
let result = firstNum;

// через цикл пробегаемся по result
while (result > 0) {
    result -= secondNum;
}

// определяем остаток и выводим ответ
if (result === 0) {
    console.log("делится без остатка");
} else {
    console.log("делится с остатком");
}



// 3. Необходимо, без использования любых других условных операторов (case, if, ? и пр.)
// и логических выражений, убрать условный оператор «Если» из следующего блока (А
// может принимать значение 0 или 1):
// Если (А = 0) Тогда B = 2;
// Иначе В = 1;
// КонецЕсли;
// Результатом решения задачи должно быть выражение на выбранном вами языке
// программирования.

// создаем две переменные A and B
let a = 0;
let b = a;

// создаем цикл
while (a === 0) {
    b = 2;
    break;
}

// выводим значения, которые зависят от переменой A
console.log(`a = ${a} and b = ${b}`);



// 4. Имеются два числовых массива, оба массива упорядочены по возрастанию.
// Необходимо написать алгоритм, за один цикл, выдающий значения обоих массивов в
// порядке возрастания.

// создаем два упорядоченных массива
let firstArray = [10, 12, 14, 15];
let secondArray = [2, 4, 7, 8];

// создаем результирующий массив
let resultArray = [];

// создаем алгоритм слияния, за один цикл
for (let i = 0; i < firstArray.length + secondArray.length; i++) {
    if (firstArray[i] <= secondArray[i]) {
        resultArray[i] = firstArray[i];
        resultArray[i + firstArray.length] = secondArray[i];
    }
    if (secondArray[i] < firstArray[i]) {
        resultArray[i] = secondArray[i];
        resultArray[i + secondArray.length] = firstArray[i];
    }
}

// выводим результирующий массив
console.log(resultArray);



