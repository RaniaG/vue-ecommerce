export default {
    state: {
        userId: null,
        userName: '',
        photo: '',
        roles: [],
        token: ''
    },
    getters: {
        isLoggedIn(state) {
            return state.userId != null;
        },
        isInRole(state, role) {
            return state.userId != null && state.roles.find(e => e == role);
        },
        getToken(state) {
            return state.token;
        }
    },
    mutations: {
        setUser(state, { userId, userName, photo, roles, token }) {
            state.userId = userId;
            state.userName = userName;
            state.photo = photo;
            state.roles = roles;
            state.token = token;
        },
        clearUser(state) {
            state.userId = null;
            state.userName = '';
            state.photo = '';
            state.roles = [];
            state.token = '';
        }
    }
}