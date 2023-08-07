import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'layout',
      component: () => import('@/views/Layout/index.vue'),
      children:[
        {
          path:'',  //给空就说明是layout默认子路由
          name:'home',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'category',
          name:'category',
          component: () => import('@/views/Category/index.vue'),
        }

      ]
    },
    {
      path:'/login',
      name:'login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router