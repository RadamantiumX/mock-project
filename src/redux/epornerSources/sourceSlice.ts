/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getLatestContent } from '../../services/resources'

// import  { type Video } from '../../types/eporner'
// import type { APIEpornerResponse } from '../../types/eporner'
export interface EpornerState {
  data: any,
  loading: boolean,
  error: string | null
}

const initialState: EpornerState = {
  data: [],
  loading: false,
  error: ""
}



export const getEpornerSource = createAsyncThunk("eporner", async (payload:number) => {
 
  return await getLatestContent(payload)

})



export const epornerSlice = createSlice({
  name: 'eporner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
       .addCase(getEpornerSource.pending, (state) => { // Pending state
         state.loading = true
       })
       .addCase(getEpornerSource.fulfilled, (state, action) => { // Filled state
         state.loading = false
         state.error = null
         state.data = action.payload
       })
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .addCase(getEpornerSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
         state.loading = false
         state.error = action.payload
         state.data = []
       })
     
  }
})


export default epornerSlice.reducer