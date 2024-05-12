import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import { Notifications } from "../components/layoutComponents/Notifications"

export default function AuthLayout() {
 const { token, age, notification } = useStateContext()


  if(token){
    return <Navigate to="/redirect"/>
  }

  if(!age){
    return <Navigate to="/rta"/>
  }


  return (
    <>
    <Outlet/>
    {notification && <Notifications notification={notification}/>}
    </>
  )
}
