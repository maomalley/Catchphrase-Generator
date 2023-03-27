import { createApp } from 'vue'
import App from './App.vue'
import About from './components/About.vue'
import Home from "@/components/Home.vue"
import PageNotFound from '@/components/PageNotFound.vue'
import Contact from '@/components/Contact.vue'
import Greetings from './components/Greetings.vue'
import './assets/main.css'

import { createWebHistory, createRouter } from "vue-router"
//import router from './router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '/about',
        name: "About",
        component: About,
    },
    {
        path: '/contact',
        name: "Contact",
        component: Contact,
    },
    {
        path: '/greetings',
        name: "Greetings",
        component: Greetings,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router
//import './src/styles.css'
// const nav = ["Catchphrases","Greetings","About","Contact"];
//
// const vm = new Vue({
//     el: '#app',
//     nav: nav,
//     methods: {
//
//     }
// });

createApp(App).use(router).mount('#app')


