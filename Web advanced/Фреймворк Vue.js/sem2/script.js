// Вы разрабатываете страницу для отображения информации о товаре. 
// У вас есть объект product, который содержит информацию о товаре, 
// включая название, цену и URL изображения товара. Вам необходимо отобразить эту информацию 
// на странице с использованием v-bind.
// Добавьте кнопку, которая будет изменять цену товара. 
// При нажатии на кнопку должна генерироваться скидка на товар от 1 до 20% и обновиться цена 
// товара в соответствии с значением скидки

new Vue({
    el: '#app',
    data: {
        discount: 0,
        product: {
            name: "bird",
            price: 100,
            photo: 'https://funart.pro/uploads/posts/2021-07/1625630590_16-funart-pro-p-ptitsa-sekretar-zhivotnie-krasivo-foto-20.jpg',
        },
    },
    methods: {
        discountGenerate() {
            this.discount = Math.floor(Math.random() * 20)
        }
    },
    computed: {
        discountPrice() {
            return this.product.price - this.product.price * this.discount / 100;
        }
    },
});





// Вы разрабатываете простое приложение для отображения списка пользователей.
// У вас есть массив объектов users, где каждый объект представляет
// одного пользователя с его именем и возрастом.
// Вам необходимо отобразить каждого пользователя из массива в виде списка на странице.

new Vue({
    el: '#app2',
    data: {
        users: [
            {
                id: 1,
                name: "artem",
                age: 22,
            },
            {
                id: 2,
                name: "nikita",
                age: 19,
            },
            {
                id: 3,
                name: "oleg",
                age: 24,
            }
        ]
    },
});





// Вы разрабатываете приложение для создания списка покупок.
// У вас есть массив объектов items, где каждый объект представляет товар с его названием
// и количеством. Вам необходимо отобразить список товаров, предоставить возможность
// изменять количество каждого товара и отмечать товары, которые уже куплены.

new Vue({
    el: '#app3',
    data: {
        items: [
            {
                id: 1,
                name: "milk",
                count: 15,
                isBuy: false,
            },
            {
                id: 2,
                name: "apple",
                count: 20,
                isBuy: false,
            },
            {
                id: 3,
                name: "meat",
                count: 25,
                isBuy: false,
            }
        ]
    },
});





// Вы разрабатываете приложение для управления списком контактов.
// У вас есть форма с полями "Имя", "Фамилия" и "Email", где пользователь может
// вводить информацию о новом контакте. После добавления контакта
// он должен отображаться в списке контактов.
// Требуется связать форму с данными и отображать список контактов на странице.

new Vue({
    el: "#app4",
    data: {
        newProduct: {
            id: 0,
            name: '',
            count: 0,
            isBuy: false
        },
        items: [
            {
                id: 0,
                name: 'молоко',
                count: 10,
                isBuy: false
            },
            {
                id: 2,
                name: 'мясо',
                count: 40,
                isBuy: false
            },
            {
                id: 1,
                name: 'рыба',
                count: 30,
                isBuy: false
            },
            {
                id: 3,
                name: 'сок',
                count: 20,
                isBuy: false
            },
        ]
    },
    methods: {
        addProduct() {
            this.newProduct.id = Date.now();
            this.items.push(
                {
                    ...this.newProduct
                }
            )
            this.newProduct = {
                id: 0,
                name: '',
                count: 0,
                isBuy: false
            }
        }
    }
});