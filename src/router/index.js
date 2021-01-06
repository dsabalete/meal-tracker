import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LayoutDefault from '../layouts/LayoutDefault.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { layout: 'div' },
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (login.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: { layout: LayoutDefault },
    },
    {
        path: '/createAccount',
        name: 'CreateAccount',
        component: () =>
            import(
                /* webpackChunkName: "createAccount" */ '../views/NewAccount.vue'
            ),
        meta: { layout: LayoutDefault },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
