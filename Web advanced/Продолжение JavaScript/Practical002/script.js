// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const allSuperLink = document.getElementById("super_link");
console.log(allSuperLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const allСardLink = document.getElementsByClassName("card-link");
for (let i = 0; i < allСardLink.length; i++) {
    allСardLink[i].textContent = "ссылка";
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const allCardBody = document.querySelector('.card-body');
const linkInBody = allCardBody.querySelectorAll('.card-link');
console.log(linkInBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const dataNumber = document.querySelector('[data-number = "50"]');
console.log(dataNumber);

// 5. Выведите содержимое тега title в консоль.
const myTitle = document.querySelector('title');
console.log(myTitle.innerText);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitle = document.querySelector('.card-title');
const parentCardTitle = cardTitle.parentNode;
console.log(parentCardTitle);

// 7. Создайте тег "p", запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const varText = document.createElement("p");
varText.textContent = "Привет";
const card = document.querySelector('.card');
const parentCard = card.parentNode;
parentCard.insertBefore(varText, card);

// 8. Удалите тег h6 на странице.
const varH6 = document.querySelector('h6');
varH6.remove();