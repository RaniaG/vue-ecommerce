import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'jquery/dist/jquery'
import 'popper.js/dist/popper'
import 'bootstrap/dist/js/bootstrap'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';
import { store } from './store/store';
import dropDown from './components/shared/components/dropdown';
import pagedList from './components/shared/components/pagedList';
import ZoomOnHover from "vue-zoom-on-hover";
import rating from './components/shared/components/rating';
import tabs from './components/shared/components/tabs';
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

Vue.use(ZoomOnHover);
Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.component('app-dropdown', dropDown)
Vue.component('app-paged-list', pagedList);
Vue.component('app-rating', rating);
Vue.component('app-tabs', tabs);
Vue.component('app-range-slider', VueRangeSlider);




new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes,
    mode: 'history'
  }),
  store
}).$mount('#app')
