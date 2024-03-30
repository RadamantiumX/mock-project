import { Link } from "react-router-dom"

export const PasswordRecovery = () => {
  return (
    <form className="flex flex-col gap-2 w-1/2" action="">
      <input type="text" placeholder="New password" />
      <input type="text" placeholder="Confirm new password"/>
      <button className="border rounded-md">Reset</button>
      <Link to="/auth/portal/signin">¿Already have an account? sign in</Link>
    </form>
  )
}

