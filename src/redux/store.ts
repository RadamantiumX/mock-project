import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from './epornerSources/sourceSlice'
import favsReducer from './favSources/favsSlice'
import postsReducer from './postSources/postsSlice'


export const store = configureStore({
  reducer: {
    source: sourceReducer,
    favs: favsReducer,
    posts: postsReducer
  },
 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch