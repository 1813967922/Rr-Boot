import { RouteRecordRaw } from 'vue-router'
import Layout from '/@/layouts/index.vue'

const dashboard: RouteRecordRaw = {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/workplace',
    component: Layout,
    meta: {
        title: '仪表盘',
        icon: 'odometer',
    },
    children: [
        {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('/@/views/dashboard/workplace/index.vue'),
            meta: {
                title: '工作台',
                icon: 'dataBoard',
            },
        },
        {
            path: '/dashboard/monitor',
            name: 'Monitor',
            component: () => import('/@/views/dashboard/monitor/index.vue'),
            meta: {
                title: '实时监控',
                icon: 'compass',
            },
        },
    ],
}

export default dashboard
