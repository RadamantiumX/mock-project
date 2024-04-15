/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import { useState } from "react"
import { useStateContext } from "../../contexts/ContextProvider"
import axiosClientAuth from "../../services/axios-client-auth"


export const SignIn = () => {
   const [email, _setEmail] = useState("")
   const [password, setPassword] = useState("") 

  const { setToken, setPath, setNickname, setEmail, setId } = useStateContext()
  
   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const payload = {
        email: email,
        password: password
      }

        axiosClientAuth.post('/signin', payload)
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
  


  return (
    <form className="flex flex-col gap-2 w-1/2" onSubmit={handleSubmit}>
      <h1 className="text-3xl">Login in to <span className="font-bold text-red-500">Vanilla Leak</span></h1>
      <input type="email" name="email" placeholder="email" value={email} onChange={(e)=>_setEmail(e.target.value)} required/>
      <input type="password" name="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      <Link to="/auth/portal/forgotten-password">¿Forgot your password?</Link>
      <button type="submit" className="border rounded-md">Sign In</button>
      <Link to="/auth/portal/signup">¿Not registered? create an account</Link>
    </form>
  )
}


