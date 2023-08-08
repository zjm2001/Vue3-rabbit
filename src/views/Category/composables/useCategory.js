// 封装分类数据业务相关代码
import { ref, onMounted } from 'vue'
import { getTopCategoryAPI } from '@/apis/category.js'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'



export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id) => {
        const { result } = await getTopCategoryAPI(id)
        categoryData.value = result
    }
    // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route     onMounted(() => getCategory(route.params.is)) 方法一
    // 进入时还需要调用一次
    onMounted(() => getCategory(route.params.id))
    //避免缓存使用onBeforeRouteUpdate()钩子
    onBeforeRouteUpdate((to) => {
        // console.log(to);  //去到哪一个路由详情参数
        getCategory(to.params.id)
    })
    return { categoryData }
}