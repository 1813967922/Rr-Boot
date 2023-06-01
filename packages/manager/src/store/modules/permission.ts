import { defineStore } from 'pinia'
import { Permission } from '../interface'
import { reactive } from 'vue'
import router from '/@/router/index'
import { TabPaneName, TabPaneProps } from 'element-plus'
import { Menu } from '/@/types/global'

// * 首页地址（默认）
export const HOME_URL: string = '/dashboard/workplace'
// * Tabs（黑名单地址，不需要添加到 tabs 的路由地址）
export const TABS_BLACK_LIST: string[] = ['/403', '/404', '/500', '/login']

export const permissionStore = defineStore(
    'permission',
    () => {
        const state: Permission = reactive({
            tabsMenuValue: HOME_URL,
            tabsMenuList: [{ title: '工作台', path: HOME_URL, icon: 'dataBoard', close: false }],
        })

        const addTabs = (tabItem: Menu.MenuOptions) => {
            // not add tabs black list
            if (TABS_BLACK_LIST.includes(tabItem.path)) return
            const tabInfo: Menu.MenuOptions = {
                title: tabItem.title,
                path: tabItem.path,
                icon: tabItem.icon,
                close: tabItem.close,
            }

            if (state.tabsMenuList.every(item => item.path !== tabItem.path)) {
                state.tabsMenuList.push(tabInfo)
            }
            setTabsMenuValue(tabItem.path)
            router.push(tabItem.path)
        }
        // Remove Tabs
        const removeTabs = (tabPath: TabPaneName) => {
            let tabsMenuValue = state.tabsMenuValue
            const tabsMenuList = state.tabsMenuList
            if (tabsMenuValue === tabPath) {
                tabsMenuList.forEach((item, index) => {
                    if (item.path !== tabPath) return
                    const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1]
                    if (!nextTab) return
                    tabsMenuValue = nextTab.path
                    router.push(nextTab.path)
                })
            }
            state.tabsMenuValue = tabsMenuValue
            state.tabsMenuList = tabsMenuList.filter(item => item.path !== tabPath)
        }
        // Change Tabs
        const changeTabs = (tabItem: TabPaneProps) => {
            state.tabsMenuList.forEach(item => {
                if (item.title === tabItem.label) router.push(item.path)
            })
        }
        // Set TabsMenuValue
        const setTabsMenuValue = (tabsMenuValue: string) => {
            state.tabsMenuValue = tabsMenuValue
        }
        // Set TabsMenuList
        const setTabsMenuList = (tabsMenuList: Menu.MenuOptions[]) => {
            state.tabsMenuList = tabsMenuList
        }
        // Close MultipleTab
        const closeMultipleTab = (tabsMenuValue?: string) => {
            state.tabsMenuList = state.tabsMenuList.filter(item => {
                return item.path === tabsMenuValue || item.path === HOME_URL
            })
        }
        // Go Home
        const goHome = () => {
            router.push(HOME_URL)
            state.tabsMenuValue = HOME_URL
        }

        return { state, goHome, setTabsMenuValue, closeMultipleTab, setTabsMenuList, changeTabs, removeTabs, addTabs }
    },
    {
        // 开启数据缓存
        persist: {
            enabled: true,
        },
    }
)
