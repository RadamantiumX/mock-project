import { Link } from "react-router-dom"
export const SingInButton = () => {
  return (
    <div className="flex flex-col items-center">
      <Link to="/auth/portal/signin" className="text-xl text-pink-600 hover:text-pink-700">
        Sing In to comment
      </Link>
    </div>
  )
}

