/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FavsPayload } from "../types/api"

// Recovery FAVS videos from current user

import  { type APIVanillaLeakPost } from "../types/api"
import { type APIVanillaLeakReplys } from "../types/api"
export const isFav = async ( {payload}:any) => {

        const response = await fetch('http://localhost:4000/social/isfav',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(payload)    
        })

     // const data = await response.json()
     return response.status

   
}

// Recovery POST from current video
export const latestPosts = async (payload:string) => {
    const response = await fetch(`http://localhost:4000/post/allpost/${payload}/post`)
     const data = await response.json() as APIVanillaLeakPost
     return data
}

// Recovery Responses Posts from current video
export const latestReplys = async () => {
    const response = await fetch(`http://localhost:4000/post/allresponses`)
     const {responses:data} = await response.json() as APIVanillaLeakReplys
     return data
}


