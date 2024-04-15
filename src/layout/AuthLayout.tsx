import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
// import { useEffect } from "react"
// import axiosClientAuth from "../services/axios-client-auth"

export default function AuthLayout() {
 const { token, age } = useStateContext()

/*const payload = {
  token: token
}*/
  
  if(token){
    return <Navigate to="/redirect"/>
  }

  if(!age){
    return <Navigate to="/rta"/>
  }

/*useEffect(()=>{
   axiosClientAuth.post('/token', payload)
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   .then(({data}):any=>{
     console.log(data)
   })
},[payload])*/


  return (
    <>
    <Outlet/>
    </>
  )
}
