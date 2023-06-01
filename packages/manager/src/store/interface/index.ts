import { Menu } from "/@/types/global";

export interface App {
    appName: string
}

export interface Permission {
    tabsMenuValue: string;
	tabsMenuList: Menu.MenuOptions[];
}

export interface Config {
    layoutMode: string
    mainAnimation: string
    isOpen: boolean
    menuwidth: number
    menuCollapse: boolean
    theme: string
}

export interface User {
    nickName: string
    avatar: string
    token: string
    id: string
}
