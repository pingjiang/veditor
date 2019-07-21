import Vue from 'vue';
import iview from 'iview';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import 'iview/dist/styles/iview.css';

Vue.use(iview);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
