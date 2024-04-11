import { useStateContext } from "../contexts/ContextProvider"
import { Loading } from "../components/redirectComponents/Loading"
import {  Navigate } from "react-router-dom"

export default function Redirect() {
  const { path, setPath } = useStateContext()
 
  // Without "path", has to be redirected to home page instantly
  if (path === ""){
       return <Navigate to="/"/>
  } else {
   setTimeout(() => {
        setPath("")
        return <Navigate to={`/${path}`}/>
    },2000)
  }

  return (
    <main>
      <Loading/>
    </main>
  )
}
