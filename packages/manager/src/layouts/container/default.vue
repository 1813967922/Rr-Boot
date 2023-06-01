<script lang="ts" setup>
import Main from "../router-view/main.vue"
import Header from "../components/header.vue"
import Aside from "../components/aside.vue"
import Tabs from '../components/tabs/index.vue'
</script>

<template>
    <el-container class="w-full h-full">
        <Aside />
        <el-container class="w-full h-full flex-col">
            <Header />
            <Tabs />
            <Main class="bg" />
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.bg{
    background-color: var(--el-bg-color-page);
}
</style>
