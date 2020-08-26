import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './styles/login.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  components: {
    App,
  },
}).$mount('#app');
