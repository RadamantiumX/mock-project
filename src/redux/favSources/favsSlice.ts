/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { isFav } from '../../services/api'
// import { type FavsPayload } from '../../types/api'


export interface FavsState {
  data: string | null,
  loading: boolean,
  error: string | null
}

const initialState: FavsState = {
  data: "",
  loading: false,
  error: ""
}



export const getFavsSource = createAsyncThunk("favs", async ({ payload }:any) => {
  return await isFav(payload)
})



export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
       .addCase(getFavsSource.pending, (state) => { // Pending state
         state.loading = true
       })
       .addCase(getFavsSource.fulfilled, (state, action) => { // Filled state
         state.loading = false
         state.error = null
         state.data = action.payload
       })
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .addCase(getFavsSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
         state.loading = false
         state.error = action.payload
         state.data = ""
       })
     
  }
})


export default favsSlice.reducer