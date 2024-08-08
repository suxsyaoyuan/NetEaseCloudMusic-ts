import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from './modules/recommend'
import playerReducer from './modules/player'
import rankingReducer from './modules/ranking'
import songsReducer from './modules/songs'
import djradioReducer from './modules/djradio'
import newalbumReducer from './modules/newalbum'
import newalbumDetailReducer from './modules/newalbumdetail'
import artistReducer from './modules/artist'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer,
    ranking: rankingReducer,
    songs: songsReducer,
    djradio: djradioReducer,
    newalbum: newalbumReducer,
    newalbumdetail: newalbumDetailReducer,
    artist: artistReducer
  }
})

export type RootState = ReturnType<typeof store.getState> // getState函数返回值的类型
export type DispatchType = typeof store.dispatch //dispatch函数的类型

export default store
