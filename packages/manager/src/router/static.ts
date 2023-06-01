import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import Layout from '/@/layouts/index.vue'

const modules = import.meta.glob('./modules/*.ts', { eager: true })

export const formatModules = (_modules: any, result: RouteRecordNormalized[]) => {
    Object.keys(_modules).forEach(key => {
        const defaultModule = _modules[key].default
        if (!defaultModule) return
        const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
        result.push(...moduleList)
    })
    return result
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, [])

// 静态路由
const staticRouter: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard/workplace',
    },
    {
        path: '/login',
        component: () => import('/@/views/login/index.vue'),
        meta: { title: '登录' },
    },
    {
        path: '/redirect/:path',
        name: 'Redirect',
        component: () => import('/@/views/redirect/index.vue'),
        meta: { title: 'redirect' },
    },
    {
        path: '/:path(.*)',
        redirect: '/404',
    },
    {
        path: '/404',
        component: () => import('/@/views/error/404.vue'),
        meta: { title: '404错误' },
    },
    {
        path: '/401',
        component: () => import('/@/views/error/401.vue'),
        meta: { title: '401错误' },
    },
    ...appRoutes
]

export { staticRouter }
