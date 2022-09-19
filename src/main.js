import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

const Netease = createApp(App)
Netease.use(router)
Netease.use(store)
Netease.mount('#app')
