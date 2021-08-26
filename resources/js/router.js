import Vue from 'vue'
import VueRouter from 'vue-router'
import MangerProductTable from './components/Admin/MangerProductTable.vue'
import MangerOrderTable from './components/Admin/MangerOrderTable.vue'

import layoutSidenavContentOriginal from './components/Admin/layoutSidenavContentOriginal.vue'

Vue.use(VueRouter)

const routes = [
    /* {
         path: '*',
         redirect: '/'
     },*/
    {
        path: '/',
        name: 'home',
        component: () => import('./components/ShopHome/ShopHome.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/Login/Login.vue')
    },
    {
        path: '/shopcar',
        name: 'shopcar',
        component: () => import('./components/ShopCar/shopcar.vue')
    },
    {
        path: '/admin',
        component: () => import('./components/Admin/AdminPage.vue'),
        children: [{
            path: 'MangerProduct',
            name: "MangerProduct",
            components: {
                layoutSidenav_content: MangerProductTable
            },
        },
        {
            path: 'MangerOrder',
            name: "MangerOrder",
            components: {
                layoutSidenav_content: MangerOrderTable
            },
        },
        {
            path: '',
            name: "Original",
            components: {
                layoutSidenav_content: layoutSidenavContentOriginal
            },
        }
        ]
    },
    {
        path: '/ChatRoom',
        name: 'ChatRoom',
        component: () => import('./components/ChatRoom/Chat.vue')
    },
    /*{
        path: '/station/:stationID',
        name: "station",
        component: () => import('./components/DeviceList.vue'),
        children: [{
            path: 'device/:deviceID',
            name: "device",
            component: () => import('./components/DevicePlane.vue')
        }]
    }*/

]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
