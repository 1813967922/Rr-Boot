<template>
    <el-main class="w-full h-full overflow-hidden p-3" style="">
        <el-scrollbar class="bg p-3" style="box-shadow: var(--el-box-shadow-lighter);border-radius: 4px">
            <router-view v-slot="{ Component, route }">
                <transition :name="config.state.mainAnimation" mode="out-in">
                        <component :is="Component" :key="route.name"></component>
                </transition>
            </router-view>
        </el-scrollbar>
    </el-main>
</template>

<script setup lang="ts">
import { configStore } from '/@/store/modules/config'
import { permissionStore } from '/@/store/modules/permission'

const permission = permissionStore()
const config = configStore()
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'layout/main',
})
</script>

<style scoped lang="scss">
.el-main{
    height: calc(100vh - 100px);
}
.bg {
    background-color: var(--el-bg-color);
    box-sizing: border-box;
}
:deep(.el-scrollbar__bar.is-horizontal) {
    // height: 0 !important;
    // width: 0 !important;
    display: none !important;
}
</style>
