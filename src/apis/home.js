import http from '@/utils/http'
//获取轮播图api
export function getBannerAPI (){
    return http({
        url:'/home/banner'
    })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI= ()=>http({url:'/home/new'})
    
