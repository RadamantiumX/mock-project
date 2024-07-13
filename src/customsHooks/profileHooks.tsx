import { useState, useEffect } from "react"
import { useStateContext } from "../contexts/ContextProvider"
import axiosClientAuth from "../services/axios-client-auth"

type User = {
    nickname: string
    email: string
  }
export const useUserInfo=()=>{
    const [user, setUser] = useState<User>()
    const { token } = useStateContext()
    useEffect(()=>{
       axiosClientAuth.post('/user/user-info',{token})
        .then(({data})=>{
          setUser(data)
        })
        .catch(error=>{
          console.error(error.message)
        })
    },[])

    return {user}
}