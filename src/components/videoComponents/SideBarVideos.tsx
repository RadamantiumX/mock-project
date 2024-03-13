import { getRelatedVideos } from "../../services/resources"
import { useEffect, useState } from "react"
import { type Video } from "../../types/eporner"
import { Link } from "react-router-dom"
import { Ghost } from "../icons/Ghost"

interface Props {
    keywords?: string
}

// Related Videos displayed
export const SideBarVideos:React.FC<Props> = ({ keywords }) => {
  const [videos, setVideos] = useState<Video[]>([])  
 const [counter, setCounter] = useState<number>(0)
 const [loading, setLoading] = useState(true)
  const lowerCase = keywords!.toLowerCase()

  const stringSplit = lowerCase.split(" ")
  const handleResults = () => {
    setCounter(counter + 1)
    getRelatedVideos(stringSplit[counter])
               .then((data) => {
               setVideos(data)
            }             
    )
  } 
  useEffect(() => {
  getRelatedVideos(stringSplit[counter])
               .then((data) => {
               setVideos(data)
               setLoading(false)
            }             
    ) 
},[])

  return (
    <aside>
        <h3>Related Videos</h3>
        {loading ? <div>Cargando</div> : <div> {videos.length !== 0 ?<div>
            {videos.map((video,index) => (
                <article key={index}>
                    <Link className="gap-2" to={`/video/${video.id}/${video.keywords}`} target="_blank">
                       <img className="size-60 border-gray-600 rounded-md" src={video.default_thumb.src} alt={video.title} />
                       <h4 className="truncate">{video.title}</h4>
                    </Link>
                </article>
            ))}
        </div> : <div>
               <h3>We can't found related videos <Ghost/></h3>
               <button onClick={handleResults}>Cargar más resultados</button>
            </div>}</div>}
    </aside>
  )
}

// Some example response: ', creampie, japanese, old man, blowjob, big tits, milf, Forbidden Care Suikawa Yuri 476'