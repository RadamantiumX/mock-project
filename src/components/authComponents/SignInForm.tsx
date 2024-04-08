/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { signIn } from "../../redux/authSources/authSlice"
import { useStateContext } from "../../contexts/ContextProvider"
import { login } from "../../services/api"


export const SignIn = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("") 

  const { setToken,setId } = useStateContext()
  
   const dispatch = useDispatch()

    
   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const payload = {
        email: email,
        password: password
      }

     const data:any= await login(payload)
     dispatch(signIn(data))
     setToken(data.token)
     setId(data.id)  
    //  const results = await fetch('http://localhost:4000/auth/signin',{
    //         method: 'POST',
    //         headers: {'Content-type': 'application/json'},         
    //         body: JSON.stringify(payload),
           
    //   })

    //  const data = await results.json()
    //  dispatch(signIn(data.response))
    //  setToken(data.response.token)
    //  setId(data.response.id)
    //  console.log(data)
    
   }
  


  return (
    <form className="flex flex-col gap-2 w-1/2" onSubmit={handleSubmit}>
      <h1 className="text-3xl">Login in to <span className="font-bold text-red-500">Vanilla Leak</span></h1>
      <input type="email" name="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <input type="password" name="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      <Link to="/auth/portal/forgotten-password">¿Forgot your password?</Link>
      <button type="submit" className="border rounded-md">Sign In</button>
      <Link to="/auth/portal/signup">¿Not registered? create an account</Link>
    </form>
  )
}


