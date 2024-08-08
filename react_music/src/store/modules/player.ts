import { getLyric, getSongDetail } from '@/request/api/player'
import { RootState } from '@/store'
import { ILyric, parseLyric } from '@/utils'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 获取歌曲信息
export const fetchCurrentSongAction = createAsyncThunk<void, number, { state: RootState }>(
  'currentSong',
  async (id: number, { dispatch, getState }) => {
    // 准备播放某首歌曲时 先判断是否歌曲存在playList中
    // 拿到播放列表 state本身时unknown类型 用泛型给个类型
    const playList = getState().player.playList
    const songIndex = playList.findIndex((item) => item.id === id)

    // 不在歌曲列表中
    if (songIndex === -1) {
      // 获取歌曲信息song
      const res = await getSongDetail(id)
      if (res.code === 200) {
        const song = res.songs && res.songs[0]
        if (!song) return
        // 把song添加到playList中
        const newPlayList = [...playList, song]
        dispatch(changePlayListAction(newPlayList))
        // 改变当前index 默认添加到末尾
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
      }
    } else {
      // 在列表中
      const song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(changeCurrentSongIndexAction(songIndex))
    }
    // 获取歌词
    const res = await getLyric(id)
    if (res.code === 200) {
      // 处理歌词
      const result = parseLyric(res.lrc.lyric)
      dispatch(changeCurrentLyricsAction(result))
    }
  }
)

// 切换歌曲 在列表中
export const fetchChangeSongAction = createAsyncThunk(
  'fetchSongChange',
  async (isNext: boolean, { dispatch, getState }) => {
    // 拿到state中的数据 新歌曲的索引
    const { playList, playMode, currentSongIndex } = (getState() as RootState).player
    // 根据播放模式，切换歌曲
    if (!playList.length) return
    let newCurrentSongIndex = currentSongIndex
    switch (playMode) {
      // 随机
      case PLAY_MODE.RANDOM:
        newCurrentSongIndex = Math.floor(Math.random() * playList.length)
        break
      default:
        newCurrentSongIndex = isNext ? currentSongIndex + 1 : currentSongIndex - 1
        if (newCurrentSongIndex >= playList.length) newCurrentSongIndex = 0
        if (newCurrentSongIndex < 0) newCurrentSongIndex = playList.length - 1
        break
    }
    console.log(`当前模式为${playMode},随机数为${newCurrentSongIndex}`)
    // 歌曲变更 获取歌曲
    const song = playList[newCurrentSongIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changeCurrentSongIndexAction(newCurrentSongIndex))
    // 请求新的歌词
    const res = await getLyric(song.id)
    if (res.code === 200) {
      // 处理歌词
      const result = parseLyric(res.lrc.lyric)
      // 将歌词放到state
      dispatch(changeCurrentLyricsAction(result))
    }
  }
)

export enum PLAY_MODE {
  LOOP,
  RANDOM,
  ONE
}

interface Istate {
  currentSong: any
  currentSongIndex: number
  playList: any[]
  playMode: PLAY_MODE
  showBottom: boolean
  currentLyrics: ILyric[]
  lyricIndex: number
}

const initialState: Istate = {
  currentSong: {
    name: '冷战',
    id: 2100329027,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 1204010,
        name: 'TizzyT',
        tns: [],
        alias: []
      },
      {
        id: 12001060,
        name: 'Vinida (万妮达)',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 1,
    crbt: null,
    cf: '',
    al: {
      id: 179191784,
      name: '做旧',
      picUrl: 'https://p1.music.126.net/NDhXrLIUhtqFchF9ozsE1Q==/109951169058769275.jpg',
      tns: [],
      pic_str: '109951169058769275',
      pic: 109951169058769280
    },
    dt: 223029,
    h: {
      br: 320002,
      fid: 0,
      size: 8923245,
      vd: -46242,
      sr: 48000
    },
    m: {
      br: 192002,
      fid: 0,
      size: 5353965,
      vd: -43640,
      sr: 48000
    },
    l: {
      br: 128002,
      fid: 0,
      size: 3569325,
      vd: -42007,
      sr: 48000
    },
    sq: {
      br: 986043,
      fid: 0,
      size: 27489586,
      vd: -46665,
      sr: 48000
    },
    hr: {
      br: 1755546,
      fid: 0,
      size: 48942316,
      vd: -46260,
      sr: 48000
    },
    a: null,
    cd: '01',
    no: 5,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 536879104,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 1,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 7002,
    mv: 0,
    publishTime: 0
  },
  currentSongIndex: -1, // 当前播放音乐的索引
  lyricIndex: -1, // 当前歌词索引
  currentLyrics: [],
  playList: [], // 播放列表
  playMode: PLAY_MODE.LOOP, // 0 顺序播放 1 随机播放 2 单曲循环
  showBottom: true
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeCurrentLyricsAction(state, { payload }) {
      state.currentLyrics = payload
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload
    },
    changeCurrentSongIndexAction(state, { payload }) {
      state.currentSongIndex = payload
    },

    changeCurrentLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
    changeShowBottomAction(state, { payload }) {
      state.showBottom = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeCurrentLyricsAction,
  changePlayListAction,
  changeCurrentSongIndexAction,
  changePlayModeAction,
  changeCurrentLyricIndexAction,
  changeShowBottomAction
} = playerSlice.actions
export default playerSlice.reducer
