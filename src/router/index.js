import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/home/index.vue";
import Paind from "@/views/paind/index.vue";
import My_course from "@/views/my_course/index.vue";
import Buying from "@/views/buying/index.vue";





const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/paind',
        name: 'paind',
        component: Paind
    },
    {
        path: '/my_course',
        name: 'my_course',
        component: My_course
    },
    {
        path: '/buying',
        name: 'buying',
        component: Buying
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;