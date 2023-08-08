import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'  //引入初始化样式
import { lazyPlugin } from '@/directives'

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
// 全局指令注册
app.use(lazyPlugin)

app.mount('#app')
