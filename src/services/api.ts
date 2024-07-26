/* eslint-disable @typescript-eslint/no-explicit-any */
import  { type APIVanillaLeakPost } from "../types/api"
import { type APIVanillaLeakReplys } from "../types/api"

type ResponseFav = {
    fill: string,
    button: string
}

export const isFav = async ( {payload}:any) => {

        const isFavorite = await fetch(`${import.meta.env.VITE_API_AUTH_URL}/social/isfav`,{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(payload)    
        })
     const res = await isFavorite.json() as ResponseFav
     return res

   
}

// Recovery POST from current video
export const latestPosts = async (payload:string) => {
    const response = await fetch(`${import.meta.env.VITE_API_AUTH_URL}/post/allpost/${payload}/post`)
     const data = await response.json() as APIVanillaLeakPost
     return data
}

// Recovery Responses Posts from current video
export const latestReplys = async (payload:number) => {
    const response = await fetch(`${import.meta.env.VITE_API_AUTH_URL}/post/allresponse/${payload}`)
     const {responses:data} = await response.json() as APIVanillaLeakReplys
     return data
}

export const isLike = async ({payload}:any) =>{
    const response = await fetch(`${import.meta.env.VITE_API_AUTH_URL}/like/current-video`,{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(payload)    
        })
     return response.json()
}

export const deletePost = async ({payload}:any) => {
    const response = await fetch(`${import.meta.env.VITE_API_AUTH_URL}/post/del`,{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: payload
    })
    const data = await response.json()
    return data
}


