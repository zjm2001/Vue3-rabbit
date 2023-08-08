<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeaderUl from './components/LayoutHeaderUl.vue'
import {onMounted} from 'vue';
import { useCategoryStore } from '@/stores/category.js'
const CategoryStore = useCategoryStore()
onMounted(() => CategoryStore.getCategory())   //获取到数据
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutHeaderUl></LayoutHeaderUl>
  <!-- 二级路由入口 可以使用添加key方式强制清除路由缓存   :key='$route.fullPath' 方法一性能没有那么强 -->
  <!-- <RouterView :key='$route.fullPath' /> -->
  <RouterView  />
  <LayoutFooter />
</template>