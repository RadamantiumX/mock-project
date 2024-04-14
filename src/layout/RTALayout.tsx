import { Navigate } from "react-router-dom"
import { useCookies } from "react-cookie"

export default function RTALayout() {
 const [cookie, setCookie] = useCookies(['rta'])
  if(cookie){
     return <Navigate to="/"/>
  }

  const handleCookie = () => {
    setCookie("rta", "ok", {path: '/'})
  }
  return (
    <div>
        <div>
      <h1>Eres mayor de 18 años?</h1>
      <button onClick={handleCookie}>Yes</button> <a href="https://www.google.com/">No</a>
      </div>
    </div>
  )
}
