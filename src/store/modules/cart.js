export default {
    state: {
        items: ['abc'],
        total: 0,
    },
    getters: {
        getCount(state) {
            return state.items.length;
        }
    }

}