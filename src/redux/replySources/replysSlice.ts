/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import  { type Post } from '../../types/api'
import { latestReplys } from '../../services/api'

export interface ReplysState{
    data: Post[] | null | any,
    loading: boolean,
    error: string | null
}

const initialState: ReplysState= {
    data: [],
    loading: false,
    error: ""
  }

export const getReplysSource = createAsyncThunk("replys", async()=>{
     return await latestReplys()
})

export const replysSlice = createSlice({
    name: "replys",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getReplysSource.pending, (state) => { // Pending state
          state.loading = true
        })
        .addCase(getReplysSource.fulfilled, (state, action) => { // Filled state
          state.loading = false
          state.error = null
          state.data = action.payload
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(getReplysSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
          state.loading = false
          state.error = action.payload
          state.data = []
        })
    }
}) 

export default replysSlice.reducer