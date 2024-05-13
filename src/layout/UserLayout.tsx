import NavBar from "../components/layoutComponents/NavBar"
import Footer from "../components/layoutComponents/Footer"
import { Outlet, Navigate } from "react-router-dom"
import axiosClientAuth from "../services/axios-client-auth"
import { useStateContext } from "../contexts/ContextProvider"

export default function UserLayout() {
  const { token, setNotification } = useStateContext()

  if(!token){
    return <Navigate to="/redirect"/>
  }else{
    axiosClientAuth.post('/auth/token', {token: token})
      .then(({data})=>{
         setNotification(data.message)
      })
      .catch(err => {
        const res = err.response
        setNotification(res.message)
      })
  }

  return (
    <>
    <NavBar/>
      <Outlet/>
    <Footer/>
    </>
  )
}
