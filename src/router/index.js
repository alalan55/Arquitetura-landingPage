import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Contato from '@/views/Contato.vue'

//import _Arquitetura from '@/views/_Arquitetura.vue'

const routes = [
    //Principais
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        redirect: '/Home',
    },
    {
        path: '/Contato',
        component: Contato
    },
    //Serviços
    {
        path: '/Arquitetura',
        name: 'Arquitetura',
        component: () => import("../views/_Arquitetura")
    },
    {
        path: '/Design-Interiores',
        name: 'DesignInteriores',
        component: () => import("../views/_DesignInteriores")
    },
    {
        path: '/Construcoes',
        name: 'Construcoes',
        component: () => import("../views/_Construcoes")
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
})

export default router