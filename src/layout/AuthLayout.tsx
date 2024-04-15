import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

export default function AuthLayout() {
 const { token, age } = useStateContext()


  if(token){
    return <Navigate to="/redirect"/>
  }

  if(!age){
    return <Navigate to="/rta"/>
  }


  return (
    <>
    <Outlet/>
    </>
  )
}
