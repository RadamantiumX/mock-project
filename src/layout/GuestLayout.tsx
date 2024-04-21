import { Outlet, Navigate } from "react-router-dom"
import NavBar from "../components/layoutComponents/NavBar"
import Footer from "../components/layoutComponents/Footer"
import { useStateContext } from "../contexts/ContextProvider"
import { Toaster, toast } from "sonner"


export default function GuestLayout() {
  const { age, notification } = useStateContext()
if(notification){
  toast(notification)
}
 
 if(!age){
   return <Navigate to="/rta" />
 }

  return (
    <>
    <Toaster/>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
