/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;


import Vue from 'vue'
import VueRouter from 'vue-router'
import feather from 'vue-icon'
import vSelect from 'vue-select'
import Toaster from 'v-toaster'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
import Multiselect from 'vue-multiselect'

// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import Vuesax from 'vuesax'
// import 'vuesax/dist/vuesax.css' //Vuesax styles
//   Vue.use(Vuesax, {
//     // options here
//   })


// // Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueNotification from "@kugatsu/vuenotification";

// // Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    //     // Optionally install the BootstrapVue icon components plugin
    // Vue.use(IconsPlugin)
    // Vue.use(ViewUI);
Vue.use(VueRouter);
Vue.use(feather, 'v-icon')
Vue.component('v-select', vSelect)
Vue.component('multiselect', Multiselect)




/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import 'vue-select/dist/vue-select.css';
Vue.use(Toaster, { timeout: 5000 })

var routes = [{
        path: '/',

        component: () =>
            import ( /* webpackChunkName: "demo" */ './components/part/Home.vue')
    },
    {
        path: '/add',

        component: () =>
            import ( /* webpackChunkName: "demo" */ './components/part/Add.vue')
    },
    {
        path: '/product',

        component: () =>
            import ( /* webpackChunkName: "demo" */ './components/part/Product.vue')
    },
    {
        path: '/categories',
        name: 'category',
        component: () =>
            import ( /* webpackChunkName: "demo" */ './components/part/Categories.vue')
    },
    {
        name: 'categoriesedit',
        path: '/edit/:id',
        component: () =>
            import ( /* webpackChunkName: "demo" */ './components/part/EditCategory.vue')
    },
    {
        path: '/tags',
        name: 'tags',
        component: () =>
            import ( /* webpackChunkName: "demo" */ './components/part/Tags.vue')
    },
    {
        path: '/orders',

        component: () =>
            import ( /* webpackChunkName: "demo" */ './components/part/Orders.vue')
    },
    {
        path: '/users',

        component: () =>
            import ( /* webpackChunkName: "demo" */ './components/part/Users.vue')
    },


];

const router = new VueRouter({
    mode: 'hash',
    routes // short for `routes: routes`
})


const app = new Vue({
    el: '#app',
    router,

});