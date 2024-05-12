import NavBar from "../components/layoutComponents/NavBar"
import Footer from "../components/layoutComponents/Footer"
import { Outlet } from "react-router-dom"
export default function UserLayout() {
  
  return (
    <>
    <NavBar/>
      <Outlet/>
    <Footer/>
    </>
  )
}
