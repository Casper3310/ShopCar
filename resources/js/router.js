import Vue from 'vue'
import VueRouter from 'vue-router'
import MangerProductTable from './components/Admin/MangerProductTable.vue'
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
        path: '/admin',
        name: 'admin',
        component: () => import('./components/Admin/AdminPage.vue'),
        children: [{
            path: 'MangerProduct',
            name: "MangerProduct",
            components: {
                layoutSidenav_content: MangerProductTable
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
