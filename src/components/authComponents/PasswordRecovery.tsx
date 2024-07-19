import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl"

export const PasswordRecovery = () => {
  return (
    <form className="flex flex-col gap-2 w-1/2" action="">
      <input type="text" placeholder="New password" />
      <input type="text" placeholder="Confirm new password"/>
      <button className="border rounded-md"><FormattedMessage  id="auth.recovery.button" defaultMessage="Send Email"/></button>
      <Link to="/auth/portal/signin"><FormattedMessage id="auth.recovery.link#1" defaultMessage="¿Already have an account? Sign in"/></Link>
    </form>
  )
}

