import Request from '@/request/http'

export function getDjRadioCatelist() {
  return Request.get({
    url: '/dj/catelist'
  })
}

export function getDjRadioRecommend(type: any) {
  return Request.get({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}

export function getDjRadios(cateId: any, limit: any, offset: any) {
  return Request.get({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
      offset
    }
  })
}
