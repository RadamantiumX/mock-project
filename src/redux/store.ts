import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from './epornerSources/sourceSlice'
import authReducer from './authSources/authSlice'
import favsReducer from './favSources/favsSlice'
import { persistanceMiddleware } from './middleware'

export const store = configureStore({
  reducer: {
    source: sourceReducer,
    auth: authReducer,
    favs: favsReducer
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