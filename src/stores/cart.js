import { ref, computed } from 'vue'
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
            item.count += goods.count
        } else {
            cartList.value.push(goods)
        }

    }
    //删除
    const delCart = (skuId) => {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }
    // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    //全选
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }

    /**计算属性 */
    //总数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    //总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    //是否全选
    const isAll = computed(() => cartList.value.every(item => item.selected))
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck
    }
},
    { persist: true }
)