import { Link } from "react-router-dom"
import { useState } from "react"

export const SignIn = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("") 
    
   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const payload = {
        email: email,
        password: password
      }
     const formData = new FormData(e.target as HTMLFormElement)
     const results = await fetch('http://localhost:4000/auth/signin',{
            method: 'POST',
           
            body: JSON.stringify(payload),  
        
      })

      const data = await results.json()
      console.log(data)
    
   }


  return (
    <form className="flex flex-col gap-2 w-1/2" onSubmit={handleSubmit}>
      <h1 className="text-3xl">Login in to <span className="font-bold text-red-500">Vanilla Leak</span></h1>
      <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Link to="/auth/portal/forgotten-password">¿Forgot your password?</Link>
      <button className="border rounded-md">Sign In</button>
      <Link to="/auth/portal/signup">¿Not registered? create an account</Link>
    </form>
  )
}


