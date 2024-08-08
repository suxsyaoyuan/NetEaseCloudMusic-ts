import Request from '@/request/http'

// 全部新碟
export function getAllAlbum(limit: any, offset: any) {
  return Request.get({
    url: '/album/new',
    params: {
      limit,
      offset
    }
  })
}

// 新碟上架
export function getNewAlbum() {
  return Request.get({
    url: '/album/newest'
  })
}

// 专辑详情
export function getAlbumDetail(id: any) {
  return Request.get({
    url: '/album',
    params: {
      id
    }
  })
}

// 专辑评论
export function getAlbumComment(id: any, limit: any, offset: any, before: any) {
  return Request.get({
    url: '/comment/album',
    params: {
      id,
      limit,
      offset,
      before
    }
  })
}
