import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Entrance from '../views/Entrance.vue'
import ClassMng from '../views/ClassMng.vue'
import mainClass from '../views/mainClass.vue'
Vue.use(VueRouter)

	const routes = [
		{
		path: '/user',
		name: 'User',
		component: User
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
		path:'/',
		name: 'Entrance',
		component:Entrance
	},
	{
		path:'/user/classmanagment',
		name:'ClassManagment',
		component: ClassMng
	},
	{
		path:'/user/class',
		name:'MainClass',
		component:mainClass
	},

	{
		path:'*',
		redirect:{name :'Entrance'}
	}

  
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
