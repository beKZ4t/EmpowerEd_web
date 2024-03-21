import {createRouter, createWebHistory} from "vue-router";
import Main from "@/views/main/idnex.vue";
import PaindSecond from "@/views/paind_2/index.vue";
import My_cousre_second from "@/views/my_cousre_second/index.vue";
import Buying_second from "@/views/buying_second/index.vue";
import Test from "@/views/test/index.vue";
import Profile from "@/views/profile/index.vue";
import Payments from "@/views/payments/index.vue";
import Favorite from "@/views/favorite/index.vue";
import No_favorite from "@/views/no_favorite/index.vue";
import Certificate from "@/views/certificate/index.vue";
import Show_certificate from "@/views/show_certificate/index.vue";






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
    },
    {
        path: '/payments',
        name: 'payments',
        component: Payments
    },
    {
        path: '/favorite',
        name: 'favorite',
        component: Favorite
    },
    {
        path: '/no_favorite',
        name: 'no_favorite',
        component: No_favorite
    },
    {
        path: '/certificate',
        name: 'certificate',
        component: Certificate
    },
    {
        path: '/show_certificate',
        name: 'show_certificate',
        component: Show_certificate
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;