export default {
    state: {
        userId: null,
        userName: 'rania',
        photo: '',
        roles: [],
        token: ''
    },
    getters: {
        isLoggedIn() {
            return this.userId != null;
        },
        isInRole(role) {
            return this.isLoggedIn() && this.roles.find(e => e == role);
        },
        getToken() {
            return this.token;
        }
    },
    mutations: {
        setUser({ userId, userName, photo, roles, token }) {
            this.userId = userId;
            this.userName = userName;
            this.photo = photo;
            this.roles = roles;
            this.token = token;
        },
        clearUser() {
            this.userId = null;
            this.userName = 'rania';
            this.photo = '';
            this.roles = [];
            this.token = '';
        }
    }
}