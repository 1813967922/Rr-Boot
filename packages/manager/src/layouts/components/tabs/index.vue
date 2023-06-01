<template>
    <div class="tabs-box">
        <div class="tabs-menu">
            <el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @tab-remove="removeTab">
                <el-tab-pane v-for="item in tabsMenuList" :key="item.path" :path="item.path" :label="item.title" :name="item.path" :closable="item.close">
                    <template #label>
                        <el-icon class="tabs-icon" v-if="item.icon">
                            <component :is="item.icon"></component>
                        </el-icon>
                        {{ item.title }}
                    </template>
                </el-tab-pane>
            </el-tabs>
            <MoreButton></MoreButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { permissionStore } from '/@/store/modules/permission'
import { TabPaneName, TabsPaneContext } from 'element-plus'
import MoreButton from './moreButton.vue'

const permission = permissionStore()
const tabsMenuList = computed(() => permission.state.tabsMenuList)
const tabsMenuValue = computed({
    get: () => permission.state.tabsMenuValue,
    set: val => permission.setTabsMenuValue(val),
})
const route = useRoute()
const router = useRouter()
// 监听路由的变化（防止后退前进不变化 tabsMenuValue）
watch(
    () => route.path,
    () => {
        let params = { title: route.meta.title as string, path: route.path, close: true, icon: route.meta.icon as string }
        permission.addTabs(params)
    },
    { immediate: true }
)
// Tab Click
const tabClick = (tabItem: TabsPaneContext) => router.push(tabItem.props.name as string)
// Remove Tab
const removeTab = (activeTabPath: TabPaneName) => permission.removeTabs(activeTabPath)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
