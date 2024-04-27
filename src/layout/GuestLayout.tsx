import { Outlet, Navigate } from "react-router-dom"
import NavBar from "../components/layoutComponents/NavBar"
import Footer from "../components/layoutComponents/Footer"
import { useStateContext } from "../contexts/ContextProvider"
import { Notifications } from "../components/layoutComponents/Notifications"


export default function GuestLayout() {
  const { age, notification } = useStateContext()
 
 if(!age){
   return <Navigate to="/rta" />
 }



  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    {notification && <Notifications notification={notification}/>}
    </>
  )
}
