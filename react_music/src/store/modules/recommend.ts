import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '@/request/api/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/* 发送网络请求 */
// 没参数这样合到一起写 获取banner、热门推荐、新碟上架数据
export const fetchRecommendDataAction = createAsyncThunk('fetchdata', (_, { dispatch }) => {
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.banners))
  })
  getHotRecommend(8).then((res) => {
    dispatch(changeHotRecommendAction(res.result)) //根据获取到的数据格式
  })
  getNewAlbum().then((res) => {
    dispatch(changeNewAlbumAction(res.albums))
  })
  getArtistList(5).then((res) => {
    dispatch(changeSettleSingersAction(res.artists))
  })
})

// 获取榜单数据
// 方式一 每一个请求单独处理 switch (id)
// rankingIds.forEach((id) => {
//     getPlaylistDetail(id).then((res) => {
//         switch (id) {
//             case 19723756:
//                 dispatch(changeUpRankingAction(res.playlist))
//                 break
//             case 3779629:
//                 dispatch(changeNewRankingAction(res.playlist))
//                 break
//             case 2884035:

//                 dispatch(changeOriginRankingAction(res.playlist))
//                 break
//         }
//     })
// })
/**
 * 方式二:
 * 将三个结果都拿到，统一放到一个数组中管理
 * 1.获取到所有的结果后，进行dispatch操作
 * 2.获取到的结果一定是有正确顺序的
 */
const rankingIds = [19723756, 3779629, 2884035] //飙升榜 新歌榜 原创榜
export const fetchPlayListDetailAction = createAsyncThunk(
  'fetchPlayListDetail',
  async (_, { dispatch }) => {
    const promise: Promise<any>[] = []

    rankingIds.forEach((id) => {
      promise.push(getPlaylistDetail(id))
    }) //把拿到的数据传到promise数组里面  Promise.all()同时返回多个Promise的执行结果

    await Promise.all(promise).then((res) => {
      // console.log(res)
      const playlists = res.map((item) => item.playlist) //过滤 先确定有值
      // const playlists = res.filter((item) => item.playlist).map((item) => item.playlist) 这样获取不到
      dispatch(changeAllRankingDataAction(playlists))
    })
  }
)

/* 定义类型 */
interface Istate {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  allRankingData: any[]
  settleSingers: any[]
}

const initialState: Istate = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  allRankingData: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    /*  
    import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'
    changeBannersAction(state, action:PayloadAction<string>) {
        state.banners = action.payload
    }, */
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeAllRankingDataAction(state, { payload }) {
      state.allRankingData = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeAllRankingDataAction,
  changeSettleSingersAction
} = recommendSlice.actions

export default recommendSlice.reducer //再在store注册
