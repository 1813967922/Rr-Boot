<script lang="ts" setup>
import { computed, onMounted, reactive } from 'vue'
import { onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import { configStore } from '/@/store/modules/config'
import logo from './logo.vue'
import { appRoutes } from '/@/router/static'
import menuTree from './menu-tree.vue'

const route = useRoute()
const config = configStore()

const state = reactive({
    defaultActive: '',
})

const routes = computed(() => appRoutes)

// 激活当前路由的菜单
const currentRouteActive = (currentRoute: RouteLocationNormalizedLoaded) => {
    state.defaultActive = currentRoute.path
}
// 元素挂载完成后获取当前路由
onMounted(() => {
    currentRouteActive(route)
})
// 路由更新前获取路由信息
onBeforeRouteUpdate(to => {
    currentRouteActive(to)
})

const verticalMenusScrollbarHeight = computed(() => {
    let menuTopBarHeight = 0
    return 'calc(100vh - ' + menuTopBarHeight + 'px)'
})

const menuWidth = computed(() => config.menuWidth())
</script>

<template>
    <el-aside class="layout-aside-Default">
        <logo></logo>
        <el-scrollbar class="layout-main-scrollbar">
            <el-menu :default-active="state.defaultActive" :collapse-transition="false" :collapse="config.state.menuCollapse" unique-opened>
                <menuTree :routes="routes"></menuTree>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<style lang="scss" scoped>
.layout-aside-Default {
    height: 100vh;
    width: v-bind(menuWidth);
    border-right: 1px solid var(--el-border-color);
    transition: width 0.3s ease;
    overflow: hidden;
}

.el-menu {
    border: 0;
}

.vertical-menus-scrollbar {
    height: v-bind(verticalMenusScrollbarHeight);
}
</style>
