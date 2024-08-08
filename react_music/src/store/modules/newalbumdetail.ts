import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAlbumDetail } from '@/request/api/newalbum'
// , getAlbumComment

// 定义歌曲接口
export interface ISong {
  rtUrls: string[]
  ar: {
    id: number
    name: string
    alia?: string[]
  }[]
  al: {
    id: number
    name: string
    picUrl: string
    pic_str: string
    pic: number
  }
  st: number
  copyrightRcmd?: any
  songJumpInfo?: any
  djId: number
  no: number
  fee: number
  mv: number
  t: number
  v: number
  cd: string
  rtype: number
  rurl?: any
  pst: number
  alia: string[]
  pop: number
  rt: string
  mst: number
  cp: number
  crbt?: any
  cf: string
  dt: number
  h: {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }
  sq: {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }
  hr?: any
  l: {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }
  rtUrl?: any
  ftype: number
  a?: any
  m: {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }
  name: string
  id: number
  privilege: {
    id: number
    fee: number
    payed: number
    st: number
    pl: number
    dl: number
    sp: number
    cp: number
    subp: number
    cs: boolean
    maxbr: number
    fl: number
    toast: boolean
    flag: number
    preSell: boolean
    playMaxbr: number
    downloadMaxbr: number
    maxBrLevel: string
    playMaxBrLevel: string
    downloadMaxBrLevel: string
    plLevel: string
    dlLevel: string
    flLevel: string
    rscl?: any
    freeTrialPrivilege: {
      resConsumable: boolean
      userConsumable: boolean
      listenType: number
      cannotListenReason: number
      playReason?: any
    }
    chargeInfoList: {
      rate: number
      chargeUrl?: any
      chargeMessage?: any
      chargeType: number
    }[]
  }
}

// 定义专辑信息接口
export interface IAlbumInfo {
  paid: boolean
  onSale: boolean
  mark: number
  awardTags: any
  copyrightId: number
  artists: {
    img1v1Id: number
    topicPerson: number
    picId: number
    briefDesc: string
    musicSize: number
    albumSize: number
    picUrl: string
    img1v1Url: string
    followed: boolean
    trans: string
    alias: string[]
    name: string
    id: number
    img1v1Id_str: string
  }[]
  picId: number
  artist: {
    img1v1Id: number
    topicPerson: number
    picId: number
    briefDesc: string
    musicSize: number
    albumSize: number
    picUrl: string
    img1v1Url: string
    followed: boolean
    trans: string
    alias: string[]
    name: string
    id: number
    picId_str: string
    img1v1Id_str: string
  }
  publishTime: number
  company: string
  briefDesc: string
  picUrl: string
  commentThreadId: string
  blurPicUrl: string
  companyId: number
  pic: number
  status: number
  subType: string
  description: string
  tags: string
  alias: string[]
  name: string
  id: number
  type: string
  size: number
  picId_str: string
  info: {
    commentThread: {
      id: string
      resourceInfo: {
        id: number
        userId: number
        name: string
        imgUrl: string
        creator: any
        encodedId: any
        subTitle: any
        webUrl: any
      }
      resourceType: number
      commentCount: number
      likedCount: number
      shareCount: number
      hotCount: number
      latestLikedUsers: any
      resourceId: number
      resourceOwnerId: number
      resourceTitle: string
    }
    latestLikedUsers: any
    liked: boolean
    comments: any
    resourceType: number
    resourceId: number
    commentCount: number
    likedCount: number
    shareCount: number
    threadId: string
  }
}

// 更新 IState 接口
interface IState {
  albumInfo: IAlbumInfo[] // 专辑信息数组
  albumSongs: ISong[] // 歌曲数组
}

// 定义初始状态
const initialState: IState = {
  albumInfo: [],
  albumSongs: []
}

// 获取专辑内容
export const getAlbumDetailAction = createAsyncThunk(
  'albumdetail',
  async (id: any, { dispatch }) => {
    const res = await getAlbumDetail(id)
    const album = res && res.album
    const songs = res && res.songs
    dispatch(changeAlbumInfoAction(album))
    dispatch(changeAlbumSongsAction(songs))
  }
)

const newalbumDetailSlice = createSlice({
  name: 'newalbumdetail',
  initialState,
  reducers: {
    changeAlbumInfoAction(state, action) {
      state.albumInfo = action.payload
    },
    changeAlbumSongsAction(state, action) {
      state.albumSongs = action.payload
    }
  }
})

export const { changeAlbumInfoAction, changeAlbumSongsAction } = newalbumDetailSlice.actions
export default newalbumDetailSlice.reducer
