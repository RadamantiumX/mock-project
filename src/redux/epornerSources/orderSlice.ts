/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getOrderVideos } from '../../services/resources'

import  { type Video } from '../../types/eporner'
export interface EpornerState {
  data: Video[] | null,
  loading: boolean,
  error: string | null
}

const initialState: EpornerState = {
  data: [],
  loading: false,
  error: ""
}



export const getEpornerOrderSource = createAsyncThunk("order", async ({payload}:any) => {
  return await getOrderVideos({payload})

})



export const epornerOrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
       .addCase(getEpornerOrderSource.pending, (state) => { // Pending state
         state.loading = true
       })
       .addCase(getEpornerOrderSource.fulfilled, (state, action) => { // Filled state
         state.loading = false
         state.error = null
         state.data = action.payload
       })
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .addCase(getEpornerOrderSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
         state.loading = false
         state.error = action.payload
         state.data = []
       })
     
  }
})


export default epornerOrderSlice.reducer