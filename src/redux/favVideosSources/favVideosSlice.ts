/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getFavVideos } from '../../services/resources'
import type { FavVideosProfile } from '../../types/eporner'


export interface FavsState {
  data: FavVideosProfile[],
  loading: boolean,
  error: string | null
}

const initialState: FavsState = {
  data: [],
  loading: false,
  error: ""
}



export const getFavsVideosSource = createAsyncThunk("favsVideos", async (payload:any) => {
  return await getFavVideos(payload)
})



export const favsSlice = createSlice({
  name: 'favsVideos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
       .addCase(getFavsVideosSource.pending, (state) => { // Pending state
         state.loading = true
       })
       .addCase(getFavsVideosSource.fulfilled, (state, action) => { // Filled state
         state.loading = false
         state.error = null
         state.data = action.payload
       })
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .addCase(getFavsVideosSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
         state.loading = false
         state.error = action.payload
         state.data = []
       })
     
  }
})


export default favsSlice.reducer