import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { handleSongsCategory } from '@/utils/handle-data'
import { getSongCategory, getSongCategoryList } from '@/request/api/songs'
import { RootState } from '@/store'

interface ISongsState {
  category: any[]
  currentCategory: string
  categorySongs: any
}

const initialState: ISongsState = {
  category: [],
  currentCategory: '全部',
  categorySongs: {}
}

export const getCategory = createAsyncThunk('songs/getCategory', async (_, { dispatch }) => {
  const response = await getSongCategory()
  const categoryData = handleSongsCategory(response)
  dispatch(setCategory(categoryData))
  return categoryData
})

export const getSongList = createAsyncThunk<void, number, { state: RootState }>(
  'songs/getSongList',
  async (page, { getState, dispatch }) => {
    const name = getState().songs.currentCategory
    const response = await getSongCategoryList(name, page)
    dispatch(setSongList(response))
    // console.log(response)
    return response
  }
)

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setCategory(state, { payload }) {
      state.category = payload
    },
    setCurrentCategory(state, { payload }) {
      state.currentCategory = payload
    },
    setSongList(state, { payload }) {
      state.categorySongs = payload
    }
  }
})

export const { setCategory, setCurrentCategory, setSongList } = songsSlice.actions
export default songsSlice.reducer
