import { UserPayload } from "../types/api"

export const login = async (payload:UserPayload) => {
    try{
        const response = await fetch('http://localhost:4000/auth/signin',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ payload })    
        })

     const data = await response.json()
     console.log(data)
    } catch (err) {
      return  console.log(err)
    }
}