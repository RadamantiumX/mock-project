import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from './epornerSources/sourceSlice'
import authReducer from './authSources/authSlice'

export const store = configureStore({
  reducer: {
    source: sourceReducer,
    auth: authReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch