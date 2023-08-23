const heading = document.querySelector('.title');
console.log(heading);

const text = document.querySelectorAll('.text');
text.forEach(element => {
    console.log(element);
});

const secondHeading = document.querySelector('#subtitle');
console.log(secondHeading);

const headingElement = document.createElement('h3');
headingElement.textContent = "Мой текст из js";
console.log(headingElement);

const headingTitle = document.querySelector('.title');
headingTitle.textContent = "Текст, который поменял в js";

const secondTitle = document.querySelector('#secondTitle');
secondTitle.remove();

const secondText = document.querySelector('.text');
const textElement = document.createElement('p');
textElement.textContent = "Добавил тескт из js";
secondText.appendChild(textElement);

const divElement = document.createElement('div');
const paragraphElement = document.createElement('p');
divElement.appendChild(paragraphElement);
const spanElement = document.createElement('span');
const strongElement = document.createElement('strong');
paragraphElement.replaceWith(spanElement, strongElement);
console.log(divElement.outerHTML);

const buttonBuy = document.querySelector('.button');
buttonBuy.onclick = function () {
    buttonBuy.textContent = "Товар куплен";
}

const buttonAddText = document.querySelector('.secondButton');
const contentAdd = document.querySelector('.content');
const myText = document.createElement('p');
myText.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, delectus.";
buttonAddText.onclick = function () {
    buttonAddText.textContent = "Вы добавили текст";
    contentAdd.appendChild(myText);
}

