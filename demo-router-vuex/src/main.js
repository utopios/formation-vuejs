import { createApp } from 'vue'
import Router from "./router"
import App from './App.vue'
import Store from "./store"
createApp(App).use(Router).use(Store).mount('#app')
