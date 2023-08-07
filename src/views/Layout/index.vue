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
  <!-- 二级路由入口 -->
  <RouterView />
  <LayoutFooter />
</template>