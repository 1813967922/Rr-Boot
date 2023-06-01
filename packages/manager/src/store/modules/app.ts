import { defineStore } from 'pinia'
import { App } from '../interface'
import { reactive } from 'vue'

export const appStore = defineStore(
    'app',
    () => {
        const state: App = reactive({
            appName: 'RrAdmin',
        })

        return { state }
    },
    {
        // 开启数据缓存
        persist: {
            enabled: true,
        },
    }
)
