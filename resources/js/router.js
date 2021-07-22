import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import example from './components/ExampleComponent.vue'

var routes = [
 {
        path: '/',
       
        component: () => import(/* webpackChunkName: "demo" */ './components/part/Home.vue')
      },
	 {
        path: '/add',
       
        component: () => import(/* webpackChunkName: "demo" */ './components/part/Add.vue')
      },
 
]
const router = new VueRouter({
  mode: 'hash',
  routes // short for `routes: routes`
})


export default {
	router
}