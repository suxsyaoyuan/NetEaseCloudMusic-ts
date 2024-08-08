import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getArtistCategory } from '@/request/api/artist'

/* 定义 ArtistState 接口 */
interface ArtistState {
  artistList: any[]
  artistheader: string
}

/* 初始状态 */
const initialState: ArtistState = {
  artistList: [],
  artistheader: ''
}

// 获取歌手列表
export const getArtistCategoryAction = createAsyncThunk(
  'ArtistCategory',
  async (
    params: { limit: number; offset: number; type: any; area: any; initial: string },
    { dispatch }
  ) => {
    const { limit, offset, type, area, initial } = params
    const result = await getArtistCategory(limit, offset, type, area, initial)
    dispatch(changeArtistCategoryAction(result.artists)) // 更新 Redux
    return result && result.artists
  }
)

// 获取头部信息
export const getArtistHeaderAction = createAsyncThunk(
  'artist/ArtistHeader',
  async (name: string, { dispatch }) => {
    // 假设获取艺术家头部信息是一个同步操作
    // 如果需要异步操作，请在此处进行相关请求
    dispatch(changeArtistHeaderAction(name))
  }
)

/* 创建 Slice */
const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    changeArtistCategoryAction(state, action) {
      state.artistList = action.payload // 更新艺术家列表
    },
    changeArtistHeaderAction(state, action) {
      state.artistheader = action.payload // 更新当前区域
    }
  }
})

/* 导出 actions 和 reducer */
export const { changeArtistCategoryAction, changeArtistHeaderAction } = artistSlice.actions

export default artistSlice.reducer
