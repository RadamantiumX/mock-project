import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import RTALayout from "./RTALayout"
import { Notifications } from "../components/layoutComponents/Notifications"

export default function AuthLayout() {
 const { token, age, notification } = useStateContext()


  if(token){
    return <Navigate to="/redirect"/>
  }

  if (!age) {
    return (
      <>
        <Outlet />
        {notification && <Notifications notification={notification} />}
        <div className="overlay" /> 
        <div className="modal-container">
          <RTALayout /> 
        </div>
      </>
    );
  }


  return (
    <>
    <Outlet/>
    {notification && <Notifications notification={notification}/>}
    </>
  )
}
