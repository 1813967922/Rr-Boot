<script lang="ts" setup>
import { configStore } from '/@/store/modules/config'

const config = configStore()
</script>

<script lang="ts">
import DefaultNav from './navbar/default.vue'
export default {
    components: { DefaultNav },
}
</script>

<template>
    <el-header>
        <component :is="config.state.layoutMode + 'Nav'"></component>
    </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  height: 50px;
    border-bottom: 1px solid var(--el-border-color);
}
</style>
