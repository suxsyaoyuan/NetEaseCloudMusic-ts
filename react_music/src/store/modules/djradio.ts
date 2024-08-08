import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getDjRadioCatelist, getDjRadioRecommend } from '@/request/api/djradio'

interface ISongsState {
  categories: any
  recommends: any
  radios: any
  currentId: number
}

const initialState: ISongsState = {
  categories: [],
  recommends: [],
  radios: [],
  currentId: 0
}

export const getRadioCategories = createAsyncThunk(
  'radio/getCategories',
  async (_, { dispatch }) => {
    const response = await getDjRadioCatelist()
    dispatch(changeCategoryAction(response))
    const currentId = response.categories[0].id
    dispatch(changeCurrentIdAction(currentId))
    return response
  }
)

export const getRadioRecommend = createAsyncThunk(
  'radio/getRecommend',
  async (currentId, { dispatch }) => {
    const response = await getDjRadioRecommend(currentId)
    dispatch(changeRecommendsAction(response))
    return response
  }
)

// export const getRadios = createAsyncThunk(
//   'radio/getRadios',
//   async ({ currentId, offset }, { dispatch }) => {
//     const response = await getDjRadios(currentId, 30, offset)
//     dispatch(changeRadiosAction(response))
//     return response
//   }
// )

const djradioSlice = createSlice({
  name: 'djradio',
  initialState,
  reducers: {
    changeCategoryAction(state, { payload }) {
      state.categories = payload
    },
    changeCurrentIdAction(state, { payload }) {
      state.recommends = payload
    },
    changeRecommendsAction(state, { payload }) {
      state.currentId = payload
    },
    changeRadiosAction(state, { payload }) {
      state.radios = payload
    }
  }
})

export const {
  changeCategoryAction,
  changeRecommendsAction,
  changeCurrentIdAction,
  changeRadiosAction
} = djradioSlice.actions
export default djradioSlice.reducer
