import { Link } from "react-router-dom"
import { Block } from "../icons/Block"
export const SingInButton = () => {
  return (
    <div className="flex items-center">
    <Link
      to="/auth/portal/signin"
      className="flex items-center px-4 py-1 text-white bg-red-700 rounded md:w-auto hover:bg-red-600"
    >
      <span className="mr-2">Sign In to comment</span>
       <Block/>
    </Link>
  </div>
  )
}

