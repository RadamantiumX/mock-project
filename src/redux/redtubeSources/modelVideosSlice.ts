/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getModelVideos } from '../../services/resources'
import { type RedTubeAPIData } from '../../types/redtube'

export interface RedTubeState{
    data: RedTubeAPIData[] | any,
    loading: boolean,
    error: string | null
}

const initialState: RedTubeState = {
    data: [],
    loading: false,
    error: ""
}

export const getRedTubeSource = createAsyncThunk("redtube", async(payload :string | undefined)=>{
    return await getModelVideos(payload)
})

export const redtubeSlice = createSlice({
    name: "redtube",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
       .addCase(getRedTubeSource.pending, (state) => { // Pending state
         state.loading = true
       })
       .addCase(getRedTubeSource.fulfilled, (state, action) => { // Filled state
         state.loading = false
         state.error = null
         state.data = action.payload
       })
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .addCase(getRedTubeSource.rejected, (state, action: PayloadAction<any>) => { // Rejected state
         state.loading = false
         state.error = action.payload
         state.data = []
       })
    }
})

export default redtubeSlice.reducer