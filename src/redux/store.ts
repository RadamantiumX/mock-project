import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from './epornerSources/sourceSlice'
import favsReducer from './favSources/favsSlice'
import postsReducer from './postSources/postsSlice'
import replysReducer from './replySources/replysSlice'
import likesReducer from './likeSources/likesSlice'





export const store = configureStore({
  reducer: {
    source: sourceReducer,
    favs: favsReducer,
    posts: postsReducer,
    replys: replysReducer,
    likes: likesReducer,
    
    
  },
 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch