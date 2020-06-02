import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';
import { store } from './store/store';
Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes,
    mode: 'history'
  }),
  store
}).$mount('#app')
