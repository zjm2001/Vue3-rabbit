import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const addCart = (goods) => {
        //操作购物车逻辑
        //已添加就count+1
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        //没有就push
        if (item) {
            //找到了
            item.count+=goods.count
        } else {
            cartList.value.push(goods)
        }

    }
    return { cartList, addCart }
},
{ persist: true} 
)