// task1

/* <div class="block"></div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute) */

// const block = document.querySelector('.block');
// const itemDiv = document.createElement('div');
// itemDiv.classList.add('item');
// itemDiv.textContent = "Элемент внутри";
// block.appendChild(itemDiv);

// itemDiv.style.color = 'blue';
// itemDiv.style.border = '1px solid black';
// itemDiv.style.backgroundColor = '#f8f8f8';
// itemDiv.style.padding = '16px';

// itemDiv.setAttribute('class', 'item_1');

// task2

// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const textElem = document.querySelector('.text');
// console.log(textElem.parentNode);

// task3

/* <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */

// const h2El = document.querySelector("h2");
// const body = document.querySelector("body");
// const parents = [];

// let parent = h2El.parentNode;

// while (parent !== body) {
//     parents.push(parent);
//     parent = parent.parentNode;
// }
// console.log(parents);

// task4

/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */

const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");

// input.addEventListener('input', (event) => {
//   const value = event.target.value
//   console.log(value);
// })

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errorMessage = document.createElement("h2");
    if (input.value === "") {
        errorMessage.textContent = "Вы не заполнили поле";
        errorMessage.style.border = "2px solid red";
    } else {
        errorMessage.textContent = "Вы заполнили поле";
        errorMessage.style.border = "2px solid green";
    }
    form.appendChild(errorMessage);
    setTimeout(() => {
        errorMessage.remove();
    }, 1000);
});

