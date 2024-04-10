/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../types/api"
import { UserPayload } from "../../types/api"
import { login } from "../../services/api"

const DEFAULT_STATE = {
    id: null ,
    nickname: "",
    email: "",
    
}

// Persistan state after signin
const initialState = (()=> {
    const persistedState = localStorage.getItem("__auth__state__")
    if (persistedState){
        return JSON.parse(persistedState).auth
    } 
  return DEFAULT_STATE
      
}) 



export const getAuthSource = createAsyncThunk ("auth", async (payload: UserPayload) => {
      if (Object.keys(payload).length === 2){
        return await login(payload)
      }
}) 

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state:any, action) => {
            const { id, nickname, email }:User = action.payload     
            state.id = id   
            state.nickname = nickname
            state.email = email
            
          
            
        }
    },
})
export const { signIn } = authSlice.actions
export default authSlice.reducer