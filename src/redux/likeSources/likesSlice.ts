/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { isLike } from '../../services/api'
// import { type Like } from '../../types/api'



export interface LikesState {
  data: any | null,
  loading: boolean,
  error: string | null
}

const initialState: LikesState = {
  data: 0,
  loading: false,
  error: ""
}



export const getLikesSource = createAsyncThunk("likes", async ({payload}:any) => {
  return await isLike({payload})
})



export const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
       .addCase(getLikesSource.pending, (state) => { // Pending state
         state.loading = true
       })
       .addCase(getLikesSource.fulfilled, (state, action) => { // Filled state
         state.loading = false
         state.error = null
         state.data = action.payload
       })
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .addCase(getLikesSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
         state.loading = false
         state.error = action.payload
         state.data = 0
       })
     
  }
})


export default likesSlice.reducer