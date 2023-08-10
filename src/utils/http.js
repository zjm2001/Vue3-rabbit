import axios from "axios";
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user.js'
import router from "../router";

const http = axios.create({  //创建axios实例
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',  //基准地址
  timeout: 5000   //超时时间
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 1. 从pinia获取token数据
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
// 对响应数据做点什么 
return response.data;
}, function (error) {
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message: error.response.data.message
  })
   // token401失效处理
  const userStore = useUserStore()
  if (error.response.status === 401) {
    userStore.clearUserInfo() //清空token
    router.push('/login')
  }
  return Promise.reject(error);
});
export default http