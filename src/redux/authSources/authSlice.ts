import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../types/api"

export interface AuthState {
    user: User
    loading: boolean
    error: string | null
}

const initialState: AuthState = {
    user: {},
    loading: false,
    error: ""
} 