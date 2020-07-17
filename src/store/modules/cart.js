export default {
    state: {
        items: ['abc'],
        total: 0,
    },
    getters: {
        getCount(state) {
            return state.items.length;
        }
    },
    mutations: {
        addToCart(state, product) {
            state.items.find(e => e.id == product.id);
        }
    }

}