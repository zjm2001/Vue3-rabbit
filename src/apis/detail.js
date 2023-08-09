import http from '@/utils/http'

/**渲染基础数据 */
export const getDetail = (id) => {
    return http({
        url: '/goods',
        params: {
            id
        }
    })
}