export default {
    state: {
        items: [],
    },
    getters: {
        getCount(state) {
            return state.items.length;
        }
    }
}