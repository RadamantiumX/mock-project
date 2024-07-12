/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useEffect, useState } from "react"
import { VideoFavCard } from "./VideoFavCard"
import "./videoList.scss";
import { Header } from "./Header"
import axiosClientAuth from "../../services/axios-client-auth";
import { useStateContext } from "../../contexts/ContextProvider";
import { fetchTest } from "../../services/resources";

export const VideosList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [request, setRequest] = useState<any>([])
  const { token } = useStateContext()
  

  // Temporal fetch on users Videos FAVORITES

  useEffect(() => {
    fetchTest('zGJQYOb1PQ5')
      .then(({data})=>{
        console.log(data)
      })
      .catch(error=>{
        console.log(error)
      })
    axiosClientAuth.post('/social/fav-videos', {token})
     .then(({data})=>{
      console.log(data.results[0])
      for (let i = 0; i < data.results.length; i++){
          fetchTest( data.results[i])
          .then(({res})=>{
              console.log(res)
          })
          .catch(error=>{
            console.error(error)
          })
      }

     })
     .catch(error=>{
       console.error(error.message)
     })

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
