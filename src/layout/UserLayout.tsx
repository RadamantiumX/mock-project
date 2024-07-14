import NavBar from "../components/layoutComponents/NavBar"
import Footer from "../components/layoutComponents/Footer"
import { Outlet, useNavigate } from "react-router-dom"
import axiosClientAuth from "../services/axios-client-auth"
import { useStateContext } from "../contexts/ContextProvider"
import { Notifications } from "../components/layoutComponents/Notifications"
import { useEffect } from "react"

export default function UserLayout() {
  const { token, setNotification, notification } = useStateContext()
  const navigate = useNavigate()

useEffect(() => {
  if(!token){

    navigate('/redirect')
     }else{
    axiosClientAuth.post('/auth/token', {token: token})
      .then(({data})=>{
        console.log(data)
        // setNotification(data.message)
      })
      .catch(err => {
        const res = err.response
        setNotification(res.message)
        navigate('/redirect')
      })
  }

},[])
  

  return (
    <>
    <NavBar/>
      <Outlet/>
      
    <Footer/>
    {notification && <Notifications notification={notification} />}
    </>
  )
}
