import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getLatestContent } from '../services/resources'
import { getRelatedVideos } from '../services/resources'
import  { type Video } from '../types/eporner'
export interface SourceState {
  data: Video[] | null,
  loading: boolean,
  error: string | null
}

const initialState: SourceState = {
  data: [],
  loading: false,
  error: ""
}



export const getSource = createAsyncThunk("source", async (payload:string | number) => {
  if (typeof payload === "string"){
    
    return await getRelatedVideos(payload)
  }else{
 
  return await getLatestContent(payload)
}

})



export const sourceSlice = createSlice({
  name: 'source',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
       .addCase(getSource.pending, (state) => { // Pending state
         state.loading = true
       })
       .addCase(getSource.fulfilled, (state, action) => { // Filled state
         state.loading = false
         state.error = null
         state.data = action.payload
       })
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .addCase(getSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
         state.loading = false
         state.error = action.payload
         state.data = []
       })
     
  }
})


export default sourceSlice.reducer