import { ref,computed } from 'vue'
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
    const delCart =(skuId)=>{
    const idx =cartList.value.findIndex((item)=>skuId === item.skuId)
    cartList.value.splice(idx,1)
    }
    //总数量
 const allCount=   computed(()=> cartList.value.reduce((a,c)=>a+c.count,0))
 //总价
 const allPrice=   computed(()=> cartList.value.reduce((a,c)=>a+c.count*c.price,0))
    return { cartList, addCart,delCart,allCount,allPrice }
},
{ persist: true} 
)