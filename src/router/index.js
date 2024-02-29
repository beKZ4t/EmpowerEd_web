import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/home/index.vue";
import Paind from "@/views/paind/index.vue";
import Test from "@/views/paind/lesson_expandable.vue";





const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/paind',
        name: 'haind',
        component: Paind
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;