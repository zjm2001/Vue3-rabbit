import http from '@/utils/http.js'
//获取详情接口
export const getCheckInfoAPI = ()=>{
    return http({
        url:'/member/order/pre'
    })
}
// 创建订单
export const createOrderAPI = (data) => {
    return http({
      url: '/member/order',
      method: 'POST',
      data
    })
  }