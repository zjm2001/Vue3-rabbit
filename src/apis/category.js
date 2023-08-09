import http from '@/utils/http'
/**
 * 获取分类数据
 * @param {根据id获取不同数据} id 
 */
export const getTopCategoryAPI=(id)=>{
    return http({
        url:'/category',
        params:{
          id
        }
      })
}
/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

 export const getCategoryFilterAPI = (id) => {
  return http({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}