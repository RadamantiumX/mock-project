import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from './epornerSources/sourceSlice'

export const store = configureStore({
  reducer: {
    source: sourceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch