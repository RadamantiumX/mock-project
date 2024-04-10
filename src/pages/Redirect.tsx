import { useStateContext } from "../contexts/ContextProvider"
import { Advice } from "../components/redirectComponents/Advice"
import { useNavigate } from "react-router-dom"

export default function Redirect() {
  const { path } = useStateContext()
  const navigate = useNavigate()
  // Without "path", has to be redirected to home page instantly
  if (path === ""){
    navigate('/')
  } else {
    setTimeout(() => {
        navigate(`/${path}`)
    },3000)
  }

  return (
    <main>
      <Advice/>
    </main>
  )
}
