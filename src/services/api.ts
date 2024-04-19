import { FavsPayload } from "../types/api"

export const isFav = async ({ payload }:FavsPayload) => {

    try{
        const response = await fetch('http://localhost:4000/social/isfav',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(payload)    
        })

     const data = await response.json()
     return data.response

    } catch (err) {
      return  console.log(err)
    }
}

