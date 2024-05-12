import { Header } from "../components/orderVideosComponents/Header"
import { ButtonsSelectOrder } from "../components/orderVideosComponents/ButtonsSelectOrder"
import { Outlet } from "react-router-dom"


export default function OrderVideos() {
  return (
    <>
    <main>
    <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mt-8">
      <Header />
      <ButtonsSelectOrder />
    </div>
      <Outlet/>
    </main> 
    </>
  )
}

