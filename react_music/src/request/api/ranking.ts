import Request from '@/request/http'

//
export function getLeftList() {
  return Request.get({
    url: '/toplist'
  })
}

// 获取榜单详情
export function getRankingDetail(id: number) {
  return Request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
