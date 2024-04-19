import { Link } from "react-router-dom"

export const ForgotPassword = () => {
  return (
    <form className="flex flex-col gap-2 lg:w-3/6 lg:mx-auto sm:mx-auto mt-10" action=""> 
       <h1 className="text-4xl text-center font-subtitle mb-4">Forgot Password</h1>
       <p className="block text-withe-700 text-md mb-2">We'll send you a link with the email address registered.</p>
      <input className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-gray-500 focus:bg-white focus:outline-none text-lg" type="email" placeholder="user@example.com"/> 
      <div className="text-center mt-3 sm:text-left">
      <button className="text-white bg-[#dd2471] hover:bg-[#dd2471]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-base px-3 py-2 inline-flex items-center dark:hover:bg-[#dd2471]/80 dark:focus:ring-[#dd2471]/40 mb-2">Send Email</button>
      </div>
      <Link to="/auth/portal/signup">¿Not registered?<span className="hover:text-pink-500 ml-1"> create an account</span></Link>
    </form>
  )
}
