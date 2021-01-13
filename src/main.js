import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import events from 'events-vue-allin';
import VueSweetalert2 from 'vue-sweetalert2';
import api from './services/api';
import router from './router';
import App from './App.vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(events);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);

api.init();
Vue.config.productionTip = false;

new Vue({
  router,
  events,
  api,
  render: (h) => h(App),
}).$mount('#app');
