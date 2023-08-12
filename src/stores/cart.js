import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user.js'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'
export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    const cartList = ref([])
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            //登录状态
            await insertCartAPI({ skuId, count })
            // const res = await findNewCartListAPI()
            // cartList.value = res.result
            updateNewList()
        } else {
            //未登录状态
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


    }
    //删除
    const delCart = async (skuId) => {
        if (isLogin.value) {
            //登录状态
            await delCartAPI([skuId])
            // const res = await findNewCartListAPI()
            // cartList.value = res.result
            updateNewList()

        } else {
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }

    }
    //退出清空
    const clearCart = () => {
        cartList.value = []
    }
    //获取购物车
    const updateNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result
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
    // 3. 已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart,
        updateNewList
    }
},
    { persist: true }
)