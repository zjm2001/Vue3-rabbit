import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',  //给空就说明是layout默认子路由
          name: 'home',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'category/:id',
          name: 'category',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: () => import('@/views/SubCategory/index.vue'),
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: () => import('@/views/Detail/index.vue'),
        },
        {
          path: 'cartlist',
          name: 'cartlist',
          component: () => import('@/views/CartList/index.vue'),
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('@/views/Checkout/index.vue'),
        },
        {
          path: 'pay',
          name: 'pay',
          component: () => import('@/views/Pay/index.vue'),
        },
        {
          path: 'paycallback', // 注意路径，必须是paycallback
          name: 'paycallback',
          component: () => import('@/views/Pay/PayBack.vue'),
        },
        {
          path: '/address',
          name: 'address',
          component: () => import('@/views/Address/index.vue')
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/MemBer/index.vue'),
          children: [
            //三级路由
            {
              path: '',
              component: import('@/views/MemBer/components/UserInfo.vue')
            },
            {
              path: 'order',
              component: import('@/views/MemBer/components/UserOrder.vue')
            }
          ]
        }

      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    }
  ],
  //路由滚动行为定制(路由切换就会回到最顶部)
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
