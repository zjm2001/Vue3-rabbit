import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'  //引入初始化样式

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
