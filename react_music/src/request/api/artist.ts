import Request from '@/request/http'

// 歌手列表
export function getArtistCategory(
  limit: number,
  offset: number,
  type: number,
  area: number,
  initial: string
) {
  return Request.get({
    url: '/artist/list',
    params: {
      limit,
      offset,
      type,
      area,
      initial
    }
  })
}

// 热门歌手
export function getHotArtist(limit: number, offset: number) {
  return Request.get({
    url: '/top/artists',
    params: {
      limit,
      offset
    }
  })
}

// 歌手详情
export function getArtistDetail(id: number) {
  return Request.get({
    url: '/artist/detail',
    params: {
      id
    }
  })
}

// 歌手热门50首
export function getArtistSong(id: number) {
  return Request.get({
    url: '/artist/top/song',
    params: {
      id
    }
  })
}

// 歌手mv
export function getArtistMovie(id: number) {
  return Request.get({
    url: '/artist/mv',
    params: {
      id
    }
  })
}

// 歌手描述
export function getArtistDesc(id: number) {
  return Request.get({
    url: '/artist/desc',
    params: {
      id
    }
  })
}

// 歌手专辑
export function getArtistAlbum(id: number, limit: number, offset: number) {
  return Request.get({
    url: '/artist/album',
    params: {
      id,
      limit,
      offset
    }
  })
}
