import { useEffect, useState } from "react"
import { VideoFavCard } from "./VideoFavCard"

export const VideosList = () => {
const [request, setRequest] = useState([])

  const fetchTest = async () => {
     const req = await fetch('https://www.eporner.com/api/v2/video/search/?query=4k&per_page=12&page=2&thumbsize=small&gay=1&lq=1&format=json&order=latest')
     const {videos: data} = await req.json()
     setRequest(data)
  }
  useEffect(()=>{
   fetchTest()
   console.log(request)
  },[])  
  return (
    <section>
         {request?.map((item, key) => (
            <div className="flex flex-row gap-y-5 justify-center">{key}<VideoFavCard id={item.id} default_thumb={item.default_thumb.src} title={item.title}/></div>
         ))}
    </section>
  )
}
