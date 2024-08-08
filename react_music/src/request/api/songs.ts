import Request from '@/request/http'

export function getSongCategory() {
  return Request.get({
    url: '/playlist/catlist'
  })
}

export function getSongCategoryList(cat = '全部', offset = 0, limit = 35) {
  return Request.get({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset
    }
  })
}
