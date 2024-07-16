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
  const [error, setError] = useState('')
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
        const res = error.response
        setError(res.data.message[0].message)
       })
   }

   return { field, setField, payload, setPayload, handleSubmit, error, setError }
}

export const useUpdateUserPassword = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const {token, setNotification} = useStateContext()

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axiosClientAuth.post('/user/user-password', {oldPassword, password, confirmPassword, token})
      .then(({data})=>{
        console.log(data)
        setNotification(data.message)
        setOldPassword('')
        setPassword('')
        setConfirmPassword('')
      })
      .catch(error=>{
        const res = error.response
        if (res.data.message[0].message !== undefined){
          setError(res.data.message[0].message)
        }
        setError(res.data.message)
        console.error(error.message)
        console.error('Something went wrong!')
      })
  }

  return { oldPassword, setOldPassword, password, setPassword, confirmPassword, setConfirmPassword, handleSubmit, error, setError }
}