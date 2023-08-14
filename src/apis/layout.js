import http from '@/utils/http.js'
//获取全部分类(包含推荐商品)
export function getCategoryAPI() {
    return http({
        url: '/home/category/head',
    })
}