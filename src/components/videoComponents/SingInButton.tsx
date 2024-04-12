import { Link } from "react-router-dom"
export const SingInButton = () => {
  return (
    <div className="flex flex-col items-center">
      <Link to="/auth/portal/signin" className="border rounded-md bg-red-700 p-2 hover:bg-red-600">Sing In to comment</Link>
    </div>
  )
}

