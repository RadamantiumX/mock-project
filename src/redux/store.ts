import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from './epornerSources/sourceSlice'
import authReducer from './authSources/authSlice'
import { persistanceMiddleware } from './middleware'

export const store = configureStore({
  reducer: {
    source: sourceReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
      thunk: {
        extraArgument: persistanceMiddleware
      },
      serializableCheck: false
     }) 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch