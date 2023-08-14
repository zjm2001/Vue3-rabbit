//地址相关操作
import http from '@/utils/http.js'
//获取地址参数
export  const getAddressAPI=()=>{
    return http({
       url:'/member/address'
    })
}
//删除地址
export  const delAddressAPI=(id)=>{
    return http({
       url:`/member/address/${id}`,
       method: 'DELETE',
    })
}
//新增
export  const addAddressAPI=(data)=>{
    return http({
       url:`/member/address`,
       method: 'post',
       data
    })
}
//修改
export  const editAddressAPI=(id,data)=>{
    return http({
       url:`/member/address/${id}`,
       method: 'put',
       data
    })
}