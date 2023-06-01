import { RouteRecordRaw } from 'vue-router'
import Layout from '/@/layouts/index.vue'

const dashboard: RouteRecordRaw = {
    path: '/sys',
    name: 'Sys',
    component: Layout,
    redirect: '/sys/user',
    meta: {
        title: '系统管理',
        icon: 'setting',
    },
    children: [
        {
            path: '/sys/user',
            name: 'User',
            component: () => import('/@/views/sys/user/index.vue'),
            meta: {
                title: '用户管理',
                icon: 'user',
            },
        },
        {
            path: '/sys/user/profile',
            name: 'Profile',
            component: () => import('/@/views/sys/user/profile.vue'),
            meta: {
                title: '个人中心',
                icon: 'user',
                hide: true,
            },
        },
        {
            path: '/sys/menu',
            name: 'Menu',
            component: () => import('/@/views/sys/menu/index.vue'),
            meta: {
                title: '菜单管理',
                icon: 'menu',
            },
        },
        {
            path: '/sys/role',
            name: 'Role',
            component: () => import('/@/views/sys/role/index.vue'),
            meta: {
                title: '角色管理',
                icon: 'compass',
            },
        },
    ],
}

export default dashboard
