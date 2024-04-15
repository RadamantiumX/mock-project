import { Navigate } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

export default function RTALayout() {
  const { age, setAge, token } = useStateContext()
  if(age || token){
    return <Navigate to="/"/>
  }
 const handleAccess = () =>{
   setAge('ok')
 }
  return (
    <div>
        <div>
      <h1>Eres mayor de 18 años?</h1>
      <button onClick={handleAccess}>Yes</button> <a href="https://www.google.com/">No</a>
      </div>
    </div>
  )
}
