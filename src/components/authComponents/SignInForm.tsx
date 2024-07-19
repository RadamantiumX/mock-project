import { Link } from "react-router-dom"
import Logo from "../../assets/project/logo.png";
import { useLogin } from "../../customsHooks/authHooks";
import { AlertSignal } from "../commonComponents/AlertSignal";
import { FormattedMessage } from "react-intl";


export const SignIn = () => {
  const { email, _setEmail, password, setPassword, handleSubmit, error, setError } = useLogin()
  return (
    <form className="flex flex-col gap-2 lg:w-1/2 lg:mx-auto sm:mx-auto mt-10" onSubmit={handleSubmit}>
    {error.length > 0 && <AlertSignal setError={setError} message={error}/>}
    <h1 className="text-4xl text-center font-subtitle"><FormattedMessage id="auth.signin.title" defaultMessage="Login in to"/> </h1>
    <img style={{width:"24rem"}} className="text-center mb-2 -mt-5 sm:max-w-xs lg:max-w-full" src={Logo} alt="logo" /> 
    <label className="block text-withe-700 text-sm"><FormattedMessage id="auth.signin.email" defaultMessage="Email Address"/></label>
    <input className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="email" name="email" placeholder="email" value={email} onChange={(e) => _setEmail(e.target.value)} required />
    <label className="block text-withe-700 text-sm"><FormattedMessage id="auth.signin.password" defaultMessage="Password"/></label>
    <input className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    <div className="text-center mt-3 sm:text-left">
      <button type="submit" className="text-white bg-[#dd2471] hover:bg-[#dd2471]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-base px-3 py-2 inline-flex items-center dark:hover:bg-[#dd2471]/80 dark:focus:ring-[#dd2471]/40 mb-2"><FormattedMessage id="auth.signin.button" defaultMessage="Sign In"/></button>
    </div>
    <div className="text-sm text-center sm:text-left">
      <Link to="/auth/portal/forgotten-password" className="block mb-1 hover:text-pink-500"><FormattedMessage id="auth.signin.link#1" defaultMessage="¿Forgot your password?"/></Link>
      <Link to="/auth/portal/signup" className="block"><FormattedMessage id="auth.signin.link#2.msg" defaultMessage="¿Not registered?"/><span className="hover:text-pink-500 ml-1"><FormattedMessage id="auth.signin.link#2" defaultMessage="Create an account"/></span> </Link>
    </div>
    <Link className="text-blue-500 hover:text-blue-600" to="/legal/terms"><FormattedMessage id="auth.signin.link#3" defaultMessage="Term & Conditions"/></Link>
    <Link className="text-blue-500 hover:text-blue-600" to="/legal/privacy"><FormattedMessage id="auth.signin.link#4" defaultMessage="Privacy Policy"/></Link>
  </form>
  
  )
}


