import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue')
const LandLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/landLayout.vue')

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `../components/dashboardContents/${view}.vue`)
}
function loadHome(view) {
    return () => import(`../components/contentLanding/${view}.vue`)
}

const routes = [
    {
        path: '/',
        component: LandLayout,
        children: [
            {
                name: 'LandingHome',
                path: '',
                component: loadHome('landingHome')
            }
        ]
    },
    {
        path: '/dashboard',
        component: DashboardLayout,
        children: [
            {

                name: 'login',
                path: '/login',
                component: loadView('login')

            },
            {

                name: 'SparepartController',
                path: '/sparepartController',
                component: loadView('sparepartController')

            },
            {
                name: 'UserController',
                path: '/userController',
                component: loadView('userController')
            },

        ]
    },


]
Vue.use(Router)

const router = new Router({ mode: 'history', routes: routes })

export default router
