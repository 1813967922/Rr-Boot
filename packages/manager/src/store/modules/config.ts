import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { Config } from '../interface'

export const configStore = defineStore(
    'config',
    () => {
        const state: Config = reactive({
            layoutMode: 'Default',
            mainAnimation: 'slide-left',
            isOpen: false,
            menuwidth: 200,
            menuCollapse: false,
            theme: 'light',
        })

        const setConfig = (name: keyof Config, value: any) => {
            state[name] = value as never
        }

        const menuWidth = (): string => {
            // 菜单是否折叠
            return state.menuCollapse ? '64px' : state.menuwidth + 'px'
        }

        return { state, setConfig, menuWidth }
    },
    {
        // 开启数据缓存
        persist: {
            enabled: true,
        },
    }
)
