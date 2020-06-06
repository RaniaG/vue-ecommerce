import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'jquery/dist/jquery'
import 'popper.js/dist/popper'
import 'bootstrap/dist/js/bootstrap'
import dropDown from './components/shared/dropdown';

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';
import { store } from './store/store';
Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.component('app-dropdown', dropDown)

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes,
    mode: 'history'
  }),
  store
}).$mount('#app')
