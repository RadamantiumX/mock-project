import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../types/api"
import { UserPayload } from "../../types/api"
import { login } from "../../services/api"

const initialState = {
    id: null,
    nickname: "",
    email: "",
    token: localStorage.getItem('auth-token')
}

export const getAuthSource = createAsyncThunk ("auth", async (payload: UserPayload) => {
      if (Object.keys(payload).length === 2){
        return await login(payload)
      }
}) 

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            const { id, nickname, email, token }:User = action.payload     
            state.id = id   
            state.nickname = nickname
            state.email = email
            state.token = localStorage.setItem('auth-token', token)
            
        }
    },
})
export const { signIn } = authSlice.actions
export default authSlice.reducer