import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import cart from './modules/cart';
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        user: {...user, namespaced: true },
        cart: {...cart, namespaced: true }

    },
    strict: true
});