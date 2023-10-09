const app = new Vue({
    el: '#app',
    data: {
        myName: 'Geek',
        myText: '<p>Hello Vue</p>',
        myNames: ['Frodo', 'Sam', 'Meriadoc', 'Peregrin'],
        link: 'https://ya.ru/',
    },
    methods: {
        clickHandler() {
            console.log('click');
        }
    }
});





// 1. Установить расширение
// a. Vue VSCode Snippets
// b. Vue Language Features (Volar)
// 2. Создать новый файл index.html, добавить структуру
// 3. Подключить vue к проекту
// 4. Вывести на экран Hello Vue

// 1. Создать параграф, внутри которого будет отображаться текст
// “Товаров в корзине 0”
// 2. Создать кнопку “Купить”, при клике на которую, значение внутри
// параграфа будет увеличиваться на 1, при повторном нажатии на эту
// кнопку, счетчик не становится больше, добавить 4 таких кнопки
// 3. При нажатии на кнопку купить, необходимо чтобы текст внутри
// кнопки поменялся на “Товар в Корзине”

// 1. Создать две кнопки “Мне исполнилось 14 лет” и “Мне еще нет 14 лет”
// 2. Если пользователь нажимает на первую кнопку, то должен
// отобразиться текст. “Можете заказать товар”
// 3. Если пользователь нажимает на вторую кнопку, отображается текст
// “Доступ закрыт”

new Vue({
    el: '#app2',
    data: {
        count: 0,
        text: "",
        isAllowed: false,
        products: [
            {
                id: 1,
                name: "1 obj",
                inCart: false
            },
            {
                id: 2,
                name: "2 obj",
                inCart: false
            },
            {
                id: 3,
                name: "3 obj",
                inCart: false
            },
            {
                id: 4,
                name: "4 obj",
                inCart: false
            },
        ],
        product: {
            name: "Первый товар",
            discription: "Описание"
        },
    },
    methods: {
        addToCard(item) {
            if (!item.inCart) {
                item.inCart = true;
                this.count++;
            }
        },
        addText() {
            this.text = "Можете заказать товар";
        },
        delText() {
            this.text = "Доступ закрыт";
        },
        makeOpen() {
            this.isAllowed = true;
        },
        makeClose() {
            this.isAllowed = false;
        },
        show() {
            this.showDescription = !this.showDescription;
        },
    },
    computed: {
        message() {
            return this.isAllowed ? "Можете заказать товар" : "Доступ закрыт";
        }
    }
});





// 1. Создать кнопку “Показать еще” при клике на которую появляется
// контент под кнопкой, при повторном клике, контент необходимо
// скрыть
// 2. Добавить анимацию появления текстового блока

new Vue({
    el: '#app3',
    data: {
        product: {
            name: "Первый товар",
            discription: "Наше описание"
        },
        showDescription: false
    },
    methods: {
        show() {
            this.showDescription = !this.showDescription;
        }
    },
})





// 1. Создайте кнопку "Генерировать случайное число". При клике на
// кнопку должно отображаться случайное число в заданном диапазоне
// (например, от 1 до 10).
// 2. При клике на кнопку, если полученное значение меньше 5,
// необходимо вывести на страницу, “Число меньше 5”
// 3. Если число от 5 до 9, необходимо вывести “Число от 5 до 9”
// 4. Если число равно 10, необходимо вывести “Число ранов 10”

new Vue({
    el: '#app4',
    data: {
        randomNumber: 0
    },
    methods: {
        getRandomNumber() {
            this.randomNumber = Math.floor(Math.random() * 10) + 1;
            console.log(this.randomNumber);
        }
    },

    computed: {
        printNumber() {
            if (this.randomNumber === 10) {
                return "Число равно 10";
            }
            else {
                return this.randomNumber < 5 ? "Число меньше 5" : "Число от 5 до 9";
            }
        }
    }
})
