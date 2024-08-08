import Request from '@/request/http'

// 歌曲数据
export function getSongDetail(ids: number) {
  return Request.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

// 获取歌词信息
export function getLyric(id: number) {
  return Request.get({
    url: '/lyric',
    params: {
      id
    }
  })
}

export function getSimiPlaylist(id: number) {
  return Request.get({
    url: '/simi/playlist',
    params: {
      id
    }
  })
}

export function getSimiSong(id: number) {
  return Request.get({
    url: '/simi/song',
    params: {
      id
    }
  })
}
