<script setup>
import { getCategoryAPI } from '@/apis/text.js'
const add = async () => {
  const res = await getCategoryAPI()
  console.log(res );
}
</script>
<template>
  我是app.vue
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary" @click="add">点击发送请求</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>