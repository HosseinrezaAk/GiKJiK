import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Sign_in from '../components/Sign_in'
import Sign_up from '../components/Sign_up'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Sign_in',
    name:'Sign_in',
    component:Sign_in
  },
  {
    path:'/Sign_up',
    name:'Sign_up',
    component:Sign_up
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
