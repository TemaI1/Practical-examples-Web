// task1

// const variable = document.querySelector("#block p:first-child");
// console.log(variable);

// const variable = document.querySelector("#block");
// console.log(variable.firstElementChild);

// const variable = document.querySelectorAll("p");
// console.log(variable[0]);

// const variable = document.querySelectorAll(".www");
// console.log(variable[0]);

// task2

// const variable = document.querySelector('.link');
// variable.textContent = "link text js";

// const variable = document.querySelector('a');
// variable.innerText = "link text js";

// const variable = document.querySelector('.link');
// variable.href = "https://developer.mozilla.org/ru/";

// const variable = document.querySelector('.link');
// variable.setAttribute("style", "color:green");

// task3

// const variable = document.querySelector('.content');
// const varText = document.createElement("p");
// varText.textContent = "Новый текстовый элемент";
// variable.appendChild(varText);
// variable.removeChild(varText);

// task4

// const variable = document.querySelector('.secondContent');
// const varButton = document.createElement("button");
// varButton.textContent = "Нажми меня";
// variable.appendChild(varButton);
// let clickCount = 0;
// varButton.onclick = function () {
//     clickCount++;
//     console.log(clickCount);
// };

// task5

const variable = document.querySelector('.thirdContent');
const varButton = document.createElement("button");
varButton.textContent = "Отправить";
variable.appendChild(varButton);

varButton.onclick = function () {
    varButton.textContent = "Текст отправлен";
    setTimeout(() => {
        varButton.textContent = "Отправить еще раз";
    }, 1000)
};