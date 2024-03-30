import { Link } from "react-router-dom"
export const SignIn = () => {
  return (
    <form className="flex flex-col gap-2 w-1/2" action="">
      <h1 className="text-3xl">Login in to <span className="font-bold text-red-500">Vanilla Leak</span></h1>
      <input type="text" placeholder="email"/>
      <input type="text" placeholder="password" />
      <Link to="/auth/portal/forgotten-password">¿Forgot your password?</Link>
      <button className="border rounded-md">Sign In</button>
      <Link to="/auth/portal/signup">¿Not registered? create an account</Link>
    </form>
  )
}


