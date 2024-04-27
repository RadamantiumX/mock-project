/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FavsPayload } from "../types/api"

// Recovery FAVS videos from current user
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
export const latestPosts = async (payload:string | null) => {
    const response = await fetch('http://localhost:4000/post/allpost',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(payload)    
        })

     const data = await response.json()
     return data
}
