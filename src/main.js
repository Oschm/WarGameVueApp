import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './styles/login.css';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
  vuetify,

  components: {
    App,
  },
}).$mount('#app');
