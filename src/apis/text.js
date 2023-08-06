import http from '@/utils/http'
// 测试api
export function getCategoryAPI () {
  return http({
    url: 'home/category/head'
  })
}