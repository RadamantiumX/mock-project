import { Link } from "react-router-dom"
import Logo from "../../assets/project/logo.png";
import { useLogin } from "../../customsHooks/authHooks";

export const SignIn = () => {
  const { email, _setEmail, password, setPassword, handleSubmit } = useLogin()
  return (
    <form className="flex flex-col gap-2 lg:w-1/2 lg:mx-auto sm:mx-auto mt-10" onSubmit={handleSubmit}>
    <h1 className="text-4xl text-center font-subtitle">Login in to </h1>
    <img style={{width:"24rem"}} className="text-center mb-2 -mt-5 sm:max-w-xs lg:max-w-full" src={Logo} alt="logo" /> 
    <label className="block text-withe-700 text-sm">Email Address</label>
    <input className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="email" name="email" placeholder="email" value={email} onChange={(e) => _setEmail(e.target.value)} required />
    <label className="block text-withe-700 text-sm">Password</label>
    <input className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    <div className="text-center mt-3 sm:text-left">
      <button type="submit" className="text-white bg-[#dd2471] hover:bg-[#dd2471]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-base px-3 py-2 inline-flex items-center dark:hover:bg-[#dd2471]/80 dark:focus:ring-[#dd2471]/40 mb-2">Sign In</button>
    </div>
    <div className="text-sm text-center sm:text-left">
      <Link to="/auth/portal/forgotten-password" className="block mb-1 hover:text-pink-500">¿Forgot your password?</Link>
      <Link to="/auth/portal/signup" className="block">¿Not registered?<span className="hover:text-pink-500 ml-1">create an account</span> </Link>
    </div>
    <Link className="text-blue-500 hover:text-blue-600" to="/legal/terms">Term & Conditions</Link>
    <Link className="text-blue-500 hover:text-blue-600" to="/legal/privacy">Privacy Policy</Link>
  </form>
  
  )
}


