<script lang="ts" setup>
import { useDark, useToggle, useFullscreen } from '@vueuse/core'
import { configStore } from '/@/store/modules/config'
import { userStore } from '/@/store/modules/user'
import layoutconfig from '../config.vue'
import { useRouter } from 'vue-router'
import Breadcrumb from '../breadcrumb.vue'

const router = useRouter()
const config = configStore()
const user = userStore()
const isDark = useDark()
const toggleDark = useToggle(isDark)

const { isFullscreen, enter, exit, toggle } = useFullscreen()

const changeMenuCollapse = () => {
    config.setConfig('menuCollapse', !config.state.menuCollapse)
}
// 跳转
const jump = (path:string) => {
    router.push(path)
}
</script>

<template>
    <div class="flex items-center h-full">
        <el-icon @click="changeMenuCollapse">
            <Expand v-if="config.state.menuCollapse" />
            <fold v-else />
        </el-icon>
        <Breadcrumb class="ml-3" />
        <div class="flex ml-auto items-center gap-5">
            <!-- 全屏 -->
            <el-icon @click="toggle"><FullScreen /></el-icon>
            <!-- 主题切换 -->
            <div class="theme-toggle-content" @click="toggleDark()">
                <div class="switch">
                    <div class="switch-action">
                        <el-icon>
                            <Sunny class="switch-icon light-icon" />
                            <Moon class="switch-icon dark-icon" />
                        </el-icon>
                    </div>
                </div>
            </div>
            <!-- 用户头像 -->
            <el-dropdown class="">
                <el-avatar size="small" :src="user.avatar || 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="jump('/sys/user/profile')">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="config.setConfig('isOpen', true)">系统设置</el-dropdown-item>
                        <el-dropdown-item @click="">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        <layoutconfig />
    </div>
</template>

<style lang="scss" scoped>
// 主题切换  start
.theme-toggle-content {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 12px;
}

.switch {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid var(--el-border-color);
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.5s;
}

.switch-action {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 50%;
    background-color: #ffffff;
    transform: translate(0);
    color: var(--el-text-color-primary);
    transition: all 0.3s;
}

.switch-icon {
    position: absolute;
    left: 1px;
    bottom: 1px;
    transition: all 0.3s;
    cursor: pointer;
}

.light-icon {
    opacity: 1;
}

.dark-icon {
    opacity: 0;
}

@at-root .dark {
    .switch {
        background-color: #2c2c2c;
    }

    .switch-action {
        transform: translate(20px);
        background-color: #141414;
    }

    .dark-icon {
        opacity: 1;
    }

    .light-icon {
        opacity: 0;
    }
}

// 主题切换 end
</style>
