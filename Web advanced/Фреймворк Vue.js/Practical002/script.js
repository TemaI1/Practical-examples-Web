// Вы разрабатываете приложение для отображения и 
// сортировки списка товаров. У вас есть массив объектов products, 
// где каждый объект представляет товар с его названием и ценой. 
// Вам необходимо отобразить список товаров и предоставить пользователю 
// возможность сортировать товары по цене (по возрастанию и по убыванию).

new Vue({
    el: "#app",
    data: {
        meaning: Infinity,
        products: [
            {
                id: 1,
                name: 'рыба',
                price: 180,
            },
            {
                id: 2,
                name: 'сыр',
                price: 140,
            },
            {
                id: 3,
                name: 'фарш',
                price: 260,
            },
            {
                id: 4,
                name: 'творог',
                price: 70,
            },
        ]
    },
    methods: {
        sortProduct() {
            this.meaning = !this.meaning;
        }
    },
    computed: {
        printNumber() {
            if (this.meaning === Infinity) {
                return this.products;
            };

            if (this.meaning) {
                this.products.sort(function (a, b) {
                    if (a.price > b.price) {
                        return 1;
                    }
                    if (a.price < b.price) {
                        return -1;
                    }
                    return 0;
                });
                return this.products;
            } else {
                this.products.sort(function (a, b) {
                    if (a.price > b.price) {
                        return -1;
                    }
                    if (a.price < b.price) {
                        return 1;
                    }
                    return 0;
                });
                return this.products;
            }
        }
    }

});