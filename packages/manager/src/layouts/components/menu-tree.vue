<template>
    <template v-for="item in routes" :key="item.path">
        <template v-if="!item.meta.hide">
            <el-sub-menu :index="item.path" v-if="item.children?.length > 0 && item.children">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <menu-tree :routes="item.children"></menu-tree>
            </el-sub-menu>
            <el-menu-item :index="item.path" @click="routePush(item)" v-else>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </el-menu-item>
        </template>
    </template>
</template>

<script setup lang="ts">
import { routePush } from '/@/utils/routerhelp'
defineProps(['routes'])
</script>
