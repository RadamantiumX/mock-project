import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from './epornerSources/sourceSlice'
import favsReducer from './favSources/favsSlice'


export const store = configureStore({
  reducer: {
    source: sourceReducer,
    favs: favsReducer
  },
 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch