import { useState, useEffect } from "react"
import { useStateContext } from "../contexts/ContextProvider"
import axiosClientAuth from "../services/axios-client-auth"
import { useNavigate } from "react-router-dom"

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

export const useShowFields = () => {
  const [ showFirst, setShowFirst ] = useState(false)
  const [ showSecond, setShowSecond ] = useState(false)

  return { showFirst, setShowFirst, showSecond, setShowSecond }
}

export const useUpdateUserInfo = () => {
  const [field, setField] = useState('')
   const [payload, setPayload] = useState('')
   const {token, setNotification, setToken, setNickname, setPath} = useStateContext()
   const navigate = useNavigate()

   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()  
      axiosClientAuth.post('/user/user-update',{payload, field, token})
       .then(({data})=>{
        
        setPayload('')
        if(field === 'email'){
          setNotification(data.message)
          setTimeout(()=>{
            localStorage.clear() // Clear full storage
        setToken(null) // Token too
        setNickname(null)
        setPath('home')
        navigate('/redirect')
          },1000)
        }else{
          setNotification(data.message)
          setTimeout(()=>{
            
            setNickname(payload)
            navigate(0)
          },2000)
          
        }
       })
       .catch(error=>{
        console.error(error)
       })
   }

   return { field, setField, payload, setPayload, handleSubmit }
}