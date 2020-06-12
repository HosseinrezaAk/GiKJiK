import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Entrance from '../views/Entrance.vue'
import ClassMng from '../views/ClassMng.vue'
import mainClass from '../views/mainClass.vue'

import Quiz from '../components/Quiz.vue'
import Whiteboard from '../components/Whiteboard.vue'
import News from '../components/News.vue'
import ClassScreen from '../components/ClassScreen.vue'
Vue.use(VueRouter)

	const routes = [
		{
		path: '/userHome',
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
		path:'/classmanagment',
		name:'ClassManagment',
		component: ClassMng
	},
	{
		path:'/class',
		name:'MainClass',
		component:mainClass,
		children:[
			{
				path:'/classScreen',
				name:'ClassScreen',
				component:ClassScreen
			},
			{
				path:'/quiz',
				name:'Quiz',
				component:Quiz
			},
			{
				path:'/whiteboard',
				name:'Whiteboard',
				component:Whiteboard
			},
			{
				path:'/news',
				name:'News',
				component:News
			},
		]
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
