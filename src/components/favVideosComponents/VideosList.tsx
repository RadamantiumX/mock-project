/* eslint-disable @typescript-eslint/no-explicit-any */
import { VideoFavCard } from "./VideoFavCard"
import "./videoList.scss";
import { Header } from "./Header"
import { useFavVideos } from "../../customsHooks/favVideosHooks";
import { Loading } from "../redirectComponents/Loading";

export const VideosList = () => {
  const { request } = useFavVideos()
  return (

    <div style={{ marginTop: "1rem" }} className="mx-auto max-w-screen-xl mb-20">
      {request.length !== 0 ?<> <aside className="w-full bg-gray-200 p-4 md:hidden"> {/* Visible solo en dispositivos móviles y tabletas */}
        <h1>anuncio</h1>
      </aside>

      <header className="mb-5 md:mt-10"> 
        <div className="flex flex-col items-center md:flex-row md:justify-end md:items-baseline">
          <Header />
        </div>
      </header>

      <div className="py-3 lg:flex lg:justify-center lg:h-screen">
        <aside className="w-2/4 bg-gray-200 p-4 hidden md:block"> {/*Visible en desktop*/}
          <h1>anuncio</h1>
        </aside>
        <section className="w-full  pl-2 pr-2 overflow-hidden lg:overflow-y-auto">
          <div className="flex flex-col "> 
            {request?.map((item, key) => (
              <div className="flex flex-col gap-y-5 justify-center" key={key}>
                <VideoFavCard id={item.id} default_thumb={item.default_thumb.src} title={item.title} keywords={item.keywords} views={item.views}/>
              </div>
            ))}
          </div>
        </section>
      </div></>: <Loading/>}
    </div>
  )
}
