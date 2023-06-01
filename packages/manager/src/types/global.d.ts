import { _RouteRecordBase } from 'vue-router'

// * Menu
declare namespace Menu {
    interface MenuOptions {
        path: string
        title: string
        icon?: string
        isLink?: string
        close?: boolean
        children?: MenuOptions[]
    }
}

type Meta = {
    hide: boolean
    title: string
    icon: string
}

declare module 'vue-router' {
    interface _RouteRecordBase {
        meta: Meta
    }
}

// * Vite
declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
    VITE_API_URL: string
    VITE_PORT: number
    VITE_OPEN: boolean
    VITE_GLOB_APP_TITLE: string
    VITE_DROP_CONSOLE: boolean
    VITE_PROXY_URL: string
    VITE_BUILD_GZIP: boolean
    VITE_REPORT: boolean
}
