/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import  { type APIVanillaLeakResponse } from '../../types/api'
import { latestPosts } from '../../services/api'

export interface PostsState{
    data: APIVanillaLeakResponse | null | any,
    loading: boolean,
    error: string | null
}

const initialState: PostsState = {
    data: {},
    loading: false,
    error: ""
  }

export const getPostsSource = createAsyncThunk("posts", async(payload:string | any)=>{
     return await latestPosts(payload)
})

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getPostsSource.pending, (state) => { // Pending state
          state.loading = true
        })
        .addCase(getPostsSource.fulfilled, (state, action) => { // Filled state
          state.loading = false
          state.error = null
          state.data = action.payload
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(getPostsSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
          state.loading = false
          state.error = action.payload
          state.data = {}
        })
    }
}) 

export default postsSlice.reducer