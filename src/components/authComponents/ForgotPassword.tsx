import { Link } from "react-router-dom"

export const ForgotPassword = () => {
  return (
    <form className="flex flex-col gap-2 w-1/2" action=""> 
       <h1 className="text-3xl">Forgot Password</h1>
       <p>We'll send you a link with the email address registered.</p>
      <input type="email" placeholder="email"/> 
      <button className="border rounded-md">Send Email</button>
      <Link to="/auth/portal/signup">¿Not registered? create an account</Link>
    </form>
  )
}
