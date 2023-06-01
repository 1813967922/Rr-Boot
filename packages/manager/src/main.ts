import { createApp } from 'vue'
import App from './App.vue'

import i18n from './i18n/index'
import store from './store/index'
import router from './router'
import './router'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.scss'
import 'uno.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(i18n)
app.use(store)
app.use(router)

app.mount('#app')
