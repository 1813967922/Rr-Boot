import { NavigationFailureType, RouteLocationRaw, isNavigationFailure } from 'vue-router'
import { ElNotification } from 'element-plus'
import 'element-plus/theme-chalk/el-notification.css'
import router from '/@/router'

const modules = import.meta.glob('./../views/**/*.vue')

/**
 * 导航失败有错误消息的路由push
 * @param to — 导航位置，同 router.push
 */
export const routePush = async (to: RouteLocationRaw) => {
    try {
        const failure = await router.push(to)
        if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
            ElNotification({
                message: '导航失败，导航卫士被拦截！',
                type: 'error',
            })
        } else if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
            ElNotification({
                message: '导航失败，已在导航目标位置！',
                type: 'warning',
            })
        }
    } catch (error) {
        ElNotification({
            message: '导航失败，路由无效！',
            type: 'error',
        })
    }
}
