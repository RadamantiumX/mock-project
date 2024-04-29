/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FavsPayload } from "../types/api"

// Recovery FAVS videos from current user

import  { type APIVanillaLeakResponse } from "../types/api"
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
    const response = await fetch(`http://localhost:4000/post/allpost/${payload}`)
     const data = await response.json() as APIVanillaLeakResponse
     // const {count:qty} = await response.json() as APIVanillaLeakResponse
     return data
}
