import http from '@/utils/http'
//获取轮播图api
export function getBannerAPI (params={}){
  const {distributionSite='1'}=params    //不传默认是1商品为2
    return http({
        url:'/home/banner',
        params:{
          distributionSite
        }
    })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI= ()=>http({url:'/home/new'})
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
 export const getHotAPI = () => {
    return  http('home/hot')
  }
  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return http({
      url: '/home/goods'
    })
  }
    
