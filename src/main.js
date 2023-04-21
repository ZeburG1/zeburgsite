import { createApp } from 'vue'
import { createRouter,createWebHistory, useLink } from 'vue-router'
import App from './App.vue'

import './assets/main.css'

const routes = [
    {   
        path: "/",
        name: "ZeburG",
        component: ()=>import("@/views/ZeburG.vue"),
        meta: {
            title: "ZeburG"
        }
        
    },
    {
        path: "/MyWorks",
        name: "MyWorks",
        component: ()=>import("@/views/MyWorks.vue"),
        meta: {
            title: "MyWork's | ZeburG"
        }
    },
    {
        path: "/AboutMe",
        name: "AboutMe",
        component: ()=>import("@/views/AboutMe.vue"),
        meta: {
            title: "About | ZeburG"
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: ()=>import("@/views/NotFound.vue"),
        meta: {
            title: "404"
        }
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.afterEach((to) => {
    setTimeout(() => {
        document.title = `${to.meta.title}`
    }, 100);
});

createApp(App)
    .use(router)
    .mount('#app')

