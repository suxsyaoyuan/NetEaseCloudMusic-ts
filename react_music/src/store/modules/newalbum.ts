import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNewAlbum, getAllAlbum } from '@/request/api/newalbum'
// , getAlbumComment

interface ISongsState {
  hotAlbum: any[]
  allAlbum: any[]
  totalAlbum: number
  currentPage: number
}

const initialState: ISongsState = {
  hotAlbum: [],
  allAlbum: [],
  totalAlbum: 0,
  currentPage: 1
}

// 获取最新专辑
export const getHotNewAlbum = createAsyncThunk('hotAlbum', (_, { dispatch }) => {
  getNewAlbum().then((res) => {
    // console.log(res)
    dispatch(changeHotNewAlbumAction(res.albums))
  })
})

// 分页
export const getTotalAlbum = createAsyncThunk(
  'albums/getCurrentPage',
  async (currentPage: number, { dispatch }) => {
    dispatch(changeAlbumCurrentPage(currentPage))
    // 可在这里添加更多的逻辑
    return currentPage
  }
)

// 获取全部专辑数据
export const fetchAllAlbum = createAsyncThunk('allAlbum', async (page: number, { dispatch }) => {
  const res = await getAllAlbum(30, (page - 1) * 30)
  // console.log(res)
  dispatch(changeAlbumCurrentPage(page))
  dispatch(changeAllAlbum(res.albums))
  dispatch(changeTopTotalAlbum(res.total))

  return res // 返回异步操作结果
})

const newalbumSlice = createSlice({
  name: 'newalbum',
  initialState,
  reducers: {
    changeHotNewAlbumAction(state, action) {
      state.hotAlbum = action.payload
    },
    changeAllAlbum(state, action) {
      state.allAlbum = action.payload
    },
    changeTopTotalAlbum(state, action) {
      state.totalAlbum = action.payload
    },
    changeAlbumCurrentPage(state, action) {
      state.currentPage = action.payload
    }
  }
})

export const {
  changeHotNewAlbumAction,
  changeAllAlbum,
  changeTopTotalAlbum,
  changeAlbumCurrentPage
} = newalbumSlice.actions
export default newalbumSlice.reducer
