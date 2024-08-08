import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLeftList, getRankingDetail } from '@/request/api/ranking'

/* 定义类型 */
interface IState {
  leftlist: any[]
  rankingdetail: any
  currentIndex: number
}

const initialState: IState = {
  leftlist: [],
  rankingdetail: {},
  currentIndex: 0
}

/* 发送网络请求 */
export const getLefts = createAsyncThunk('leftlist', async (_, { dispatch }) => {
  try {
    const res = await getLeftList()
    // console.log(res)
    dispatch(changeLeftListAction(res.list))
  } catch (error) {
    // 处理错误
    console.error('Error fetching ranking data:', error)
  }
})

export const getTops = createAsyncThunk('rankingdetail', async (id: number, { dispatch }) => {
  try {
    const res = await getRankingDetail(id)
    dispatch(changeRankingDetailAction(res.playlist))
  } catch (error) {
    // 处理错误
    console.error('Error fetching ranking data:', error)
  }
})

const RankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    changeLeftListAction(state, action) {
      state.leftlist = action.payload
    },
    changeRankingDetailAction(state, action) {
      state.rankingdetail = action.payload
    },
    changeCurrentIndexAction(state, action) {
      state.currentIndex = action.payload
    }
  }
})

export const { changeLeftListAction, changeRankingDetailAction, changeCurrentIndexAction } =
  RankingSlice.actions

export default RankingSlice.reducer
