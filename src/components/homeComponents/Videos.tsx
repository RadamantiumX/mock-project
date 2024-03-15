import { useEffect, useState } from "react"
import { getLatestContent } from "../../services/resources"
import { type Video } from "../../types/eporner"
import { MovieCard } from "../commonComponents/MovieCard"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getSource } from "../../redux/sourceSlice"

export default function Videos () {
  const [videos, setVideos] = useState<Video[]>([])
  const dispatch = useAppDispatch()
  const source = useAppSelector(state => state.source.data)
 
  useEffect( () => {
  getLatestContent().then((data) => setVideos(data))
  dispatch(getSource())
  }, [])
  
  console.log(source)

  return (
    <section>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-1 justify-center mt-12 mb-12">
      {videos.map((item) => (
        <div key={item.id}>
          <MovieCard title={item.title} image={item.default_thumb.src} id={item.id} lengthMin={item.length_min} views={item.views} keywords={item.keywords}/>
        </div>
      ))}
    </div>
  </section>
  )
}