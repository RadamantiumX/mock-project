/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { pornHubData } from '../../services/scraping'
import type { PhubScrapingData } from '../../types/phubScrapingData'



export interface ModelsState {
  data: PhubScrapingData | any,
  loading: boolean,
  error: string | null
}

const initialState: ModelsState = {
  data: {},
  loading: false,
  error: ""
}



export const getModelsSource = createAsyncThunk("models", async (payload:number) => {
  return await pornHubData(payload)
})



export const modelsSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
       .addCase(getModelsSource.pending, (state) => { // Pending state
         state.loading = true
       })
       .addCase(getModelsSource.fulfilled, (state, action) => { // Filled state
         state.loading = false
         state.error = null
         state.data = action.payload
       })
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .addCase(getModelsSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
         state.loading = false
         state.error = action.payload
         state.data = {}
       })
     
  }
})


export default modelsSlice.reducer