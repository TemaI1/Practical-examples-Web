// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки должен перевернуться
//  и отобразиться в обратном порядке.

new Vue({
    el: '#app',
    data: {
        buttonName: 'Перевернуть',
    },
    methods: {
        rollOver() {
            this.buttonName = this.buttonName.split('').reverse().join('');
        },
    },
});

// 2. Есть список элементов. Пользователь может добавлять новые элементы списка
//  с текстом “Новый элемент списка” нажав на кнопку "Добавить".
// *Дополнительное задание: При клике на элемент списка он должен быть удален.

new Vue({
    el: '#app2',
    data: {
        listElement: [],
    },
    methods: {
        addElement() {
            this.listElement.push("Новый элемент списка");
        },
        delElement() {
            this.listElement.shift();
        },
    },
});