/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.     
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: 1,
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: 2,
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: 3,
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: 4,
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const num = document.querySelector('.user-input');
const button = document.querySelector('.add-button');
const list = document.querySelector('.item-list');
const message = document.querySelector('.error-message');
button.addEventListener('click', addElement);

function addElement() {
    try {
        if (num.value.length >= 5 && num.value.length <= 20) {
            list.innerHTML += `<li>${num.value}</li>`;
        } else {
            throw new Error('Ваш коментарий не корректен');
        }
    } catch (error) {
        message.textContent = error.message;
        setTimeout(function () {
            message.textContent = "";
        }, 2000);
    } finally {
        console.log('Попытка добавления коментария завершена');
    }
}

document.querySelector('.apple').textContent = initialData[0].product;
list.innerHTML += `<li>${initialData[0].reviews[0].text}</li>`;
list.innerHTML += `<li>${initialData[0].reviews[1].text}</li>`;