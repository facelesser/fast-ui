import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import FastUI from '@/core/plugin/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

// Fast UI
app.use(FastUI, {
    tableTheme: {
        border: true,
    }
})

app.mount('#app')
