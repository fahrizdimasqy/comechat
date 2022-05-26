import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',

    component: () =>
      import(/* webpackChunkName: "TopScore" */ '../views/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },

  {
    path: '/chat',
    name: 'chat',

    component: () =>
      import(/* webpackChunkName: "TopScore" */ '../views/Chat.vue'),
  },
  // {
  //   path: '/login',
  //   name: 'login',

  //   component: () =>
  //     import(/* webpackChunkName: "TopScore" */ '../views/Login.vue'),
  // },
  {
    path: '/register',
    name: 'signup',

    component: () =>
      import(/* webpackChunkName: "TopScore" */ '../views/Signup.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
