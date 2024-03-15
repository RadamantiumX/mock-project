import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from './sourceSlice'

export const store = configureStore({
  reducer: {
    source: sourceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch