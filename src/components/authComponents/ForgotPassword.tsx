import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl"

export const ForgotPassword = () => {
  return (
    <form className="flex flex-col gap-2 lg:w-3/6 lg:mx-auto sm:mx-auto mt-10" action=""> 
       <h1 className="text-4xl text-center font-subtitle mb-4"><FormattedMessage id="auth.forgot.title" defaultMessage="Forgot Password"/></h1>
       <p className="block text-withe-700 text-md mb-2"><FormattedMessage  id="auth.forgot.message" defaultMessage="We'll send you a link with the email address registered."/></p>
      <input className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="email" placeholder="user@example.com"/> 
      <div className="text-center mt-3 sm:text-left">
      <button className="text-white bg-[#dd2471] hover:bg-[#dd2471]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-base px-3 py-2 inline-flex items-center dark:hover:bg-[#dd2471]/80 dark:focus:ring-[#dd2471]/40 mb-2"><FormattedMessage id="auth.forgot.button" defaultMessage="Send email"/></button>
      </div>
      <Link to="/auth/portal/signup"><FormattedMessage id="auth.forgot.link#1.msg" defaultMessage="¿Not registered?"/><span className="hover:text-pink-500 ml-1"> <FormattedMessage id="auth.forgot.link#1.ref" defaultMessage="Create an account"/></span></Link>
    </form>
  )
}
