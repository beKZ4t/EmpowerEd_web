import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/home/index.vue";
import My_course from "@/views/my_course/index.vue";
import Buying from "@/views/buying/index.vue";
import Main from "@/views/main/idnex.vue";
import PaindSecond from "@/views/paind_2/index.vue";
import My_cousre_second from "@/views/my_cousre_second/index.vue";






const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
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
    },
    {
        path: '/main',
        name: 'main',
        component: Main
    }
    ,
    {
        path: '/paindsecond',
        name: 'paindsecond',
        component: PaindSecond
    }
    ,
    {
        path: '/my_course_second',
        name: 'my_course_second',
        component: My_cousre_second
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;