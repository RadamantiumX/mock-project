import { PageHeader } from "../components/commonComponents/PageHeader"
import { ButtonsSelectOrder } from "../components/orderVideosComponents/ButtonsSelectOrder"
import { Outlet } from "react-router-dom"


export default function OrderVideos() {
  return (
    <>
    <main>
    <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mt-8">
      <PageHeader title={'Best Porn Videos'}/>
      <ButtonsSelectOrder />
    </div>
      <Outlet/>
    </main> 
    </>
  )
}

