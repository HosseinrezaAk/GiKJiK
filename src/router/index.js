import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Entrance from '../views/Entrance.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
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
    path:'/entrance',
    name: 'Entrance',
    component:Entrance
  },


  {
    path:'*',
   redirect:{name :''}
  }

  
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
