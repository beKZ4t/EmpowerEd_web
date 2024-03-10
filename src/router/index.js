import {createRouter, createWebHistory} from "vue-router";
import Main from "@/views/main/idnex.vue";
import PaindSecond from "@/views/paind_2/index.vue";
import My_cousre_second from "@/views/my_cousre_second/index.vue";
import Buying_second from "@/views/buying_second/index.vue";
import Test from "@/views/test/index.vue";
import Profile from "@/views/profile/index.vue";






const routes = [

    {
        path: '/',
        name: 'main',
        component: Main
    }
    ,
    {
        path: '/paind',
        name: 'paind',
        component: PaindSecond
    }
    ,
    {
        path: '/my_course',
        name: 'my_course',
        component: My_cousre_second
    } ,
    {
        path: '/buying',
        name: 'buying',
        component: Buying_second
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;