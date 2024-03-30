import { Link } from "react-router-dom"
export const SignUp = () => {
  return (
    <form className="flex flex-col gap-2 w-1/2" action="">
      <h1 className="text-3xl">Register a new account</h1>
      <input type="text" placeholder="nickname"/>
      <input type="text" placeholder="email"/>
      <input type="text" placeholder="password" />
      <input type="text" placeholder="Confirm password"/>
      <button className="border rounded-md">Sign Up</button>
      <Link to="/auth/portal/signin">¿Already have an account? sign in</Link>
    </form>
  )
}


