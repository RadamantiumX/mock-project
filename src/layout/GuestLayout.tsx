import { Outlet } from "react-router-dom"
import NavBar from "../components/layoutComponents/NavBar"
import Footer from "../components/layoutComponents/Footer"
export default function GuestLayout() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
