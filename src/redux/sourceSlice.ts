import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SourceState {
  data: [] | null,
  loading: boolean,
  error: string | null
}

const initialState: SourceState = {
  data: [],
  loading: false,
  error: ""
}

export const getSource = createAsyncThunk("source", async () => {
   return fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?query=popular&per_page=10&page=2&thumbsize=big&order=latest&gay=1&lq=1&format=json`)
    .then(res => res.json())
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
       .addCase(getSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
         state.loading = false
         state.error = action.payload
         state.data = []
       })
  }
})


export default sourceSlice.reducer