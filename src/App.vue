<script setup>
// import { getCategoryAPI } from '@/apis/text.js'
// import { ref } from 'vue';

// const list =ref()
// const add = async () => {
//   const res = await getCategoryAPI()
//  list.value=res.data.result
// }
// const del =()=>{
//   list.value=[]
// }
</script>
<template>
  <!-- 我是app.vue
  <p class="txt">发顺丰框架啊啥卡加分号</p>
  <el-row class="mb-4">
    <el-button >Default</el-button>
    <el-button type="primary" @click="add">点击发送请求</el-button>
    <el-button type="success" @click="del">清空list</el-button>
  </el-row>
  <div class="box">
    <p v-for="obj in list" :key="obj.id" class="pp">   <img :src="obj.picture" alt="">   {{obj.name}}</p>
  </div> -->
  
  <!-- 一级路由入口 -->
  <router-view></router-view>
</template>
<style lang="scss" scoped> 
//  .txt{
//   color: $warnColor;  //测试自动导入scss变量自动导入
//  }
//  .box{
//   display: flex;
//   justify-content:space-between;
//   .pp{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
//  }
</style>