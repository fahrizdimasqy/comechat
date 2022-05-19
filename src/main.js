import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false

new Vue({
  VueAxios,
  axios,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
