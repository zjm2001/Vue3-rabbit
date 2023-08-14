import http from '@/utils/http.js'


/**登录接口操作 */
export const loginAPI = ({ account, password }) => {
    return http({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}
export const getLikeListAPI = (limit) => {
    return http({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }