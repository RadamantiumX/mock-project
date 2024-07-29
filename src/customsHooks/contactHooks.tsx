import { useState } from "react"
import axiosClientAuth from "../services/axios-client-auth"
import { useStateContext } from "../contexts/ContextProvider"

export const useContactPost = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")
   const { setNotification } = useStateContext()

 const handleMessage = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    axiosClientAuth.post('/message/add',{name, email, message})
    .then(({data})=>{
        setNotification(data.message)
        setName("")
        setEmail("")
        setMessage("")
    })
    .catch(error=>{
        console.error(error)
    })
 }
   
 return {name, setName, email, setEmail, message, setMessage, handleMessage}
}