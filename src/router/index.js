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
          path: 'category/:id',
          name:'category',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          path: 'category/sub/:id',
          name:'subCategory',
          component: () => import('@/views/SubCategory/index.vue'),
        },
        {
          path: 'detail/:id',
          name:'detail',
          component:  () => import('@/views/Detail/index.vue'),
        }

      ]
    },
    {
      path:'/login',
      name:'login',
      component: () => import('@/views/Login/index.vue')
    }
  ],
  //路由滚动行为定制(路由切换就会回到最顶部)
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
