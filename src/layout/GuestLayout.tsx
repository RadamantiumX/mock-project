import { Outlet, Navigate } from "react-router-dom"
import NavBar from "../components/layoutComponents/NavBar"
import Footer from "../components/layoutComponents/Footer"
import { useStateContext } from "../contexts/ContextProvider"


export default function GuestLayout() {
  const { age } = useStateContext()
  
 if(!age){
   return <Navigate to="/rta" />
 }

  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
