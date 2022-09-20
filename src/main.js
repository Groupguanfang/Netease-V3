import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const Netease = createApp(App)
Netease.use(router)
Netease.use(store)
Netease.mount('#app')
