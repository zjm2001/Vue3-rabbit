import http from '@/utils/http'
//获取轮播图api
export function getBannerAPI (){
    return http({
        url:'/home/banner'
    })
}