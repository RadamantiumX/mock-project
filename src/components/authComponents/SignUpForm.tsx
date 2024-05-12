import { Link } from "react-router-dom"
import Logo from "../../assets/project/logo.png";
import axiosClientAuth from "../../services/axios-client-auth";
import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
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
        console.log(err.message)
        setNotification(err.message)
       })
   }

  return (
    <form className="flex flex-col gap-2 lg:w-1/2 lg:mx-auto sm:mx-auto mt-10" onSubmit={handleRegister}>
      <h1 className="text-4xl text-center font-subtitle">Register a new account</h1>
      <img style={{width:"24rem"}} className="mb-2 text-center -mt-5 sm:max-w-xs lg:max-w-full" src={Logo} alt="logo" /> 
      <label className="block text-withe-700 text-sm">Nickname</label>
      <input name="nickname" value={nickname} onChange={(e)=>setNickname(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="text" placeholder="johndoe"/>
      <label className="block text-withe-700 text-sm">Email</label>
      <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="email" placeholder="user@example.com"/>
      <label className="block text-withe-700 text-sm">Password</label>
      <input name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="password"/>
      <label className="block text-withe-700 text-sm">Confirm password</label>
      <input name="confirm-password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="password" />
      <div className="text-center mt-3 sm:text-left">
      <button className="text-white bg-[#dd2471] hover:bg-[#dd2471]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-base px-3 py-2 inline-flex items-center dark:hover:bg-[#dd2471]/80 dark:focus:ring-[#dd2471]/40 mb-2">Sign Up</button>
      </div>
      <Link to="/auth/portal/signin">¿Already have an account?<span className="hover:text-pink-500 ml-1"> Sign in</span></Link>
      <p>By creating an account I agree to the Subscription <Link className="text-blue-500 hover:text-blue-600" to="/legal/privacy">Privacy Policy.</Link></p>
    </form>
  )
}


