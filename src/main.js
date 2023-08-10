import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'  //引入初始化样式
import persist from 'pinia-plugin-persistedstate'
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'


import App from './App.vue'
import router from './router'
const app = createApp(App)
const pinia=createPinia()
pinia.use(persist )   //必须要有pinia
app.use(pinia)
app.use(router)
// 全局指令注册
app.use(lazyPlugin)
//注册成全局插件
app.use(componentPlugin)

app.mount('#app')
