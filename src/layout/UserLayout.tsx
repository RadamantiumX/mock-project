import NavBar from "../components/layoutComponents/NavBar"
import Footer from "../components/layoutComponents/Footer"
import { Outlet} from "react-router-dom"
import { Notifications } from "../components/layoutComponents/Notifications"
import { useAuth } from "../customsHooks/customsHooks"

export default function UserLayout() {
 const { notification } = useAuth()
  

  return (
    <>
    <NavBar/>
      <Outlet/>
      
    <Footer/>
    {notification && <Notifications notification={notification} />}
    </>
  )
}
