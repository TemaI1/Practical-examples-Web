import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //Начальное состояние
        counter: 0,
        products: [],
    },
    mutations: {
        //Методы изменения состояния
        COUNTER_INCREMENT(state) {
            state.counter++
        },
        COUNTER_DECREMENT(state) {
            state.counter--
        },
        ADD_PRODUCT(state, product) {
            state.products.push(product)
        },
        SET_PRODUCT_STATE(state, products) {
            state.products = products
        }
    },
    actions: {
        //Методы для асинхронных операций
        addProduct(store, product) {
            const findProduct = store.getters.products.find((item) => item.id === product.id);
            if (findProduct) {
                findProduct.quantity++;
            } else {
                store.commit('ADD_PRODUCT', product)
            }
        },

        fetchProducts({ commit }) {
            setTimeout(() => {
                commit('SET_PRODUCT_STATE', [
                    {
                        id: 0,
                        name: 'apple',
                        price: 100,
                        quantity: 1
                    },
                    {
                        id: 1,
                        name: 'orange',
                        price: 150,
                        quantity: 1
                    },
                    {
                        id: 2,
                        name: 'banana',
                        price: 50,
                        quantity: 1
                    },
                ])
            }, 2000)
        }
    },
    getters: {
        //Методы чтения состояния
        products(state) {
            return state.products
        },
        totalQuantity(state) {
            return state.products.reduce((acc, product) => acc + product.quantity, 0)
        },
        totalPrice(state) {
            return state.products.reduce((acc, product) => acc + product.quantity * product.price, 0)
        }
    },
    modules: {
        //Модули VueX для разделения хранилища на подхранилища
    },
});