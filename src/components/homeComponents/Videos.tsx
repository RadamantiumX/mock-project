import { useEffect, useState } from "react"
import { getLatestContent } from "../../services/resources"
import { Video } from "../../types/eporner"
import { MovieCard } from "../commonComponents/MovieCard"

export default function Videos () {
  const [videos, setVideos] = useState<Video[]>([])

  

  useEffect( () => {
  // const resolvedVideos = await getLatestContent()
    // const data = getLatestContent()
    // console.log(data)
  
   // const videos = getLatestContent()
   
   // setVideos([resolvedVideos, ...videos])
  getLatestContent().then((data) => setVideos(data))

  }, [])
  return (
    <section>
    <div className="grid grid-cols-3 w-full m-1 justify-center gap-2">
     {
      videos.map((item) =>(
        <MovieCard title={item.title} url={item.url} image={item.default_thumb.src}/>
      ))
     }
    </div>
    </section>
  )
}