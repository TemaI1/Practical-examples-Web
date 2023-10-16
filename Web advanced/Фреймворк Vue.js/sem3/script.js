// Создание простого счетчика: Создайте компонент счетчика,
// который имеет кнопку "+" и кнопку "-", и отображает текущее значение счетчика.
// При нажатии на кнопки счетчик должен увеличиваться или уменьшаться соответственно.

Vue.component("comp", {
    data() {
        return {
            counter: 0,
        }
    },
    template: `
        <div>
            <p>Счетчик {{counter}}</p>
            <button @click="plus">+</button>
            <button @click="minus">-</button>
        </div>
    `,
    methods: {
        plus() {
            this.counter++;
        },
        minus() {
            this.counter--;
        }
    },
})



// Создайте компонент списка дел, в котором можно добавлять и удалять элементы. 
// Каждый элемент списка должен иметь кнопку удаления, 
// при нажатии на которую элемент списка будет удаляться.

Vue.component("comp2", {
    data() {
        return {
            todoname: '',
            todoList: [
                {
                    id: 0,
                    name: 'task1'
                },
                {
                    id: 1,
                    name: 'task2'
                },
                {
                    id: 2,
                    name: 'task3'
                }
            ]
        }
    },
    template: `
        <div>
            <input type="text" v-model="todoname">
            <button @click="addElement">Добавить</button>
            <ul>
                <li v-for="(todo, index) in todoList" :key="index">{{todo.name}} <button @click='deleteElement(index)'>-</button></li>
            </ul>
        </div>
    `,

    methods: {
        deleteElement(index) {
            this.todoList.splice(index, 1)
        },
        addElement() {
            const newEl = {
                id: this.todoList.length,
                name: this.todoname
            }
            this.todoList.push(newEl)
        }
    },
})



// Создайте компонент списка, который отображает массив элементов. 
// Добавьте текстовое поле для фильтрации списка. При вводе текста в поле, 
// список должен автоматически обновляться, 
// отображая только элементы, содержащие введенный текст.

Vue.component("comp3", {
    data() {
        return {
            todoname: '',
            findelement: '',
            todoList: [
                {
                    id: 0,
                    name: 'task1'
                },
                {
                    id: 1,
                    name: 'task2'
                },
                {
                    id: 2,
                    name: 'task3'
                }
            ],

        }
    },
    computed: {
        filteredToDoList() {
            return this.findelement ? this.todoList.filter((el) => el.name.includes(this.findelement)) :
                this.todoList
        }
    },
    template: `
        <div>
            <input type="text" v-model="todoname">
            <button @click="addElement">Добавить</button>
            <p>Искать</p>
            <input type="text" v-model="findelement">
            <ul>
                <li v-for="(todo, index) in filteredToDoList" :key="index">{{todo.name}} <button @click='deleteElement(index)'>-</button></li>
            </ul>
        </div>
    `,

    methods: {
        deleteElement(index) {
            this.todoList.splice(index, 1)
        },
        addElement() {
            const newEl = {
                id: this.todoList.length,
                name: this.todoname
            }
            this.todoList.push(newEl)
        }
    },
})



Vue.component("comp4", {
    data() {
        return {
            todoname: '',
            findelement: '',
            todoList: [
                {
                    id: 0,
                    name: 'task1'
                },
                {
                    id: 1,
                    name: 'task2'
                },
                {
                    id: 2,
                    name: 'task3'
                }
            ],

        }
    },
    computed: {
        filteredToDoList() {
            return this.findelement ? this.todoList.filter((el) => el.name.includes(this.findelement)) : this.todoList
        }
    },
    template: `
        <div>
            <input type="text" v-model="todoname">
            <button @click="addElement">Добавить</button>
            <p>Искать</p>
            <input type="text" v-model="findelement">
            <ul>
                <todocomp v-for="(todo, index) in filteredToDoList" :key="index" :todo="todo"></todocomp>
            </ul>
        </div>
    `,
    methods: {
        deleteElement(index) {
            this.todoList.splice(index, 1)
        },
        addElement() {
            const newEl = {
                id: this.todoList.length,
                name: this.todoname
            }
            this.todoList.push(newEl)
        }
    },
})

Vue.component('todocomp', {
    props: ['todo'],
    data() {
        return {

        }
    },
    template:
        `<li>{{todo.name}} <button @click='$emit("click", todo.id)'>-</button></li>
`
})



// Вам необходимо создать компонент "Товар", который будет отображать информацию о товаре, 
// включая название, описание и цену. Кроме того, вы должны реализовать фильтрацию товаров 
// по цене (по возрастанию и убыванию)

Vue.component("comp5", {
    data() {
        return {
            todoname: '',
            findelement: '',
            todoList: [
                {
                    id: 0,
                    name: 'ananas'
                },
                {
                    id: 1,
                    name: 'tetris'
                },
                {
                    id: 2,
                    name: 'makedonia'
                }
            ],

        }
    },
    computed: {
        filteredToDoList() {
            return this.findelement ? this.todoList.filter((el) => el.name.includes(this.findelement)) :
                this.todoList
        }
    },
    template: `
        <div>
            <input type="text" v-model="todoname">
            <button @click="addElement">Добавить</button>
            <p>Искать</p>
            <input type="text" v-model="findelement">
            <button @click="sortDown">Sort Down</button>
            <button @click="sortUp">Sort Up</button>
            <ul>
                <todocomp v-for="(todo, index) in filteredToDoList" :key="index" :todo="todo"></todocomp>
            </ul>
        </div>
    `,

    methods: {
        deleteElement(index) {
            this.todoList.splice(index, 1)
        },
        addElement() {
            const newEl = {
                id: this.todoList.length,
                name: this.todoname
            }
            this.todoList.push(newEl)
        },
        sortUp() {
            this.todoList = this.todoList.sort((a, b) =>
                a.name > b.name ? 1 : -1
            );
        },
        sortDown() {
            this.todoList = this.todoList.sort((a, b) =>
                a.name < b.name ? 1 : -1
            );
        }
    },
})


























new Vue({
    el: '#app',
    data: {

    },
});