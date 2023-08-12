import { defineStore } from 'pinia'
import { ref } from 'vue'
import {loginAPI} from '@/apis/user.js'
import {mergeCartAPI} from '@/apis/cart.js'
import {useCartStore} from './cart.js'
export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore=useCartStore()
    const getUserInfo = async ({password,account}) => {
     const res=   await loginAPI({password,account})
        userInfo.value = res.result
        //登录后合并购物车操作
       await mergeCartAPI(cartStore.cartList.map(item=>{
        return{
          skuId:item.skuId,
          selected:item.selected,
          count:item.count
        }
       }))
       //重新获取
       cartStore.updateNewList()
    }
    // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }
    return{userInfo,getUserInfo,clearUserInfo}
},
{ persist: true} 
)