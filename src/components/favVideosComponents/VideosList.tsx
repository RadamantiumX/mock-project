/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useEffect, useState } from "react"
import { VideoFavCard } from "./VideoFavCard"
import "./videoList.scss";
import { Header } from "./Header"

export const VideosList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [request, setRequest] = useState<any>([])

  const fetchTest = async () => {
    const req = await fetch('https://www.eporner.com/api/v2/video/search/?query=4k&per_page=12&page=2&thumbsize=small&gay=1&lq=1&format=json&order=latest')
    const { videos: data } = await req.json()
    setRequest(data)
  }
  useEffect(() => {
    fetchTest()

  }, [])


  return (

    <div style={{ marginTop: "1rem" }} className="mx-auto max-w-screen-xl mb-20">
      <aside className="w-full bg-gray-200 p-4 md:hidden"> {/* Visible solo en dispositivos móviles y tabletas */}
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
            {request?.map((item: { id: string; default_thumb: { src: string }; title: string }, key: string ) => (
              <div className="flex flex-col gap-y-5 justify-center" key={key}>
                <VideoFavCard id={item.id} default_thumb={item.default_thumb.src} title={item.title} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
