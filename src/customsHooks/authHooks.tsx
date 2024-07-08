/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { useStateContext } from "../contexts/ContextProvider"
import axiosClientAuth from "../services/axios-client-auth"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const [email, _setEmail] = useState("")
   const [password, setPassword] = useState("") 

  const { setToken, setPath, setNickname, setEmail, setId } = useStateContext()
  
   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const payload = {
        email: email,
        password: password
      }

        axiosClientAuth.post('/auth/signin', payload)
          .then(({data}):any => {
            // Set the local Storage
            setToken(data.response.token)
            setPath('home')
            setNickname(data.response.nickname)
            setEmail(data.response.email)
            setId(data.response.id)
            // Set the local Storage
          })
          .catch(err => {
            const response = err.response
            console.log(response)
         })
          
    
   }

   return { email, _setEmail, password, setPassword, handleSubmit }
}

export const useRegister = () => {
    const [nickname, setNickname] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
   const { setNotification } = useStateContext()
   const navigate = useNavigate()

   const handleRegister = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const payload = {
        nickname: nickname,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      }
      axiosClientAuth.post('/auth/signup', payload)
       .then(({data})=>{
          console.log(data)
          setNotification(data.message)
          setTimeout(()=>{
            navigate("/auth/portal/signin")
          },2000)
       })
       .catch(err=>{
        const res = err.response
        console.log(res.data.message)
        setNotification(res.data.message)
       })
   }

   return { nickname, setNickname, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, handleRegister }
}