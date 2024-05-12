/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { VideoFavCard } from "./VideoFavCard"

export const VideosList = () => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const [request, setRequest] = useState<any>([])

  const fetchTest = async () => {
     const req = await fetch('https://www.eporner.com/api/v2/video/search/?query=4k&per_page=12&page=2&thumbsize=small&gay=1&lq=1&format=json&order=latest')
     const {videos: data} = await req.json()
     setRequest(data)
  }
  useEffect(()=>{
   fetchTest()

  },[])  
  return (
    <section>
       <div className="flex flex-col justify-center">
         {request?.map((item: { id: string; default_thumb: { src: string }; title: string }, key: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => (
            <div className="flex flex-row gap-y-5 items-center justify-center">{key}<VideoFavCard id={item.id} default_thumb={item.default_thumb.src} title={item.title}/></div>
         ))}
         </div>
    </section>
  )
}
