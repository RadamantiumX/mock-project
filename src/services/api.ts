import { UserPayload } from "../types/api"
import axiosClientAuth from "./axios-client-auth"

export const login = async (payload:UserPayload) => {

   await axiosClientAuth.post('/signin', payload)
     .then(({data}) => {
         return data.response
     })
     .catch(err => {
        const response = err.response
        return response
     })

   /* try{
        const response = await fetch('http://localhost:4000/auth/signin',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
        
            body: JSON.stringify(payload)    
        })

     const data = await response.json()
     return data.response

    } catch (err) {
      return  console.log(err)
    }*/
}