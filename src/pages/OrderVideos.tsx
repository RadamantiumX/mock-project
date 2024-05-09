import { Header } from "../components/orderVideosComponents/Header"
import { ButtonsSelectOrder } from "../components/orderVideosComponents/ButtonsSelectOrder"
import { Outlet } from "react-router-dom"

export default function OrderVideos() {
  return (
    <>
    <main>
      <Header/>
      <ButtonsSelectOrder/>
      <Outlet/>
    </main> 
    </>
  )
}

