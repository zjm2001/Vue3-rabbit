import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'  //引入初始化样式
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'


import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
// 全局指令注册
app.use(lazyPlugin)
//注册成全局插件
app.use(componentPlugin)

app.mount('#app')
