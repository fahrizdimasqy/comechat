import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'
import * as firebase from 'firebase/app'
// import 'firebase/analytics'
// import 'firebase/auth'
// import 'firebase/messaging'
// import firebase from 'firebase/app'
// import firebaseui from 'firebaseui'
// import config from './firebaseConfig'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyDC9BFovrpM9-64SFXDwKtESTmJo1cdHY8',
  authDomain: 'letschat-eb037.firebaseapp.com',
  projectId: 'letschat-eb037',
  storageBucket: 'letschat-eb037.appspot.com',
  messagingSenderId: '973246658374',
  appId: '1:973246658374:web:588ec12476932db62d9747',
  measurementId: 'G-8JC62HQVHY',
}

firebase.initializeApp(firebaseConfig)

new Vue({
  VueAxios,
  axios,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
