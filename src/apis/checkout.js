import http from '@/utils/http.js'
//获取详情接口
export const getCheckInfoAPI = ()=>{
    return http({
        url:'/member/order/pre'
    })
}