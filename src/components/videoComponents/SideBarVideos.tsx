import { getRelatedVideos } from "../../services/resources"
import { useEffect, useState } from "react"
import { type Video } from "../../types/eporner"
import { Link } from "react-router-dom"

interface Props {
    keywords: string
}

// Related Videos displayed
export const SideBarVideos:React.FC<Props> = ({ keywords }) => {
  const [videos, setVideos] = useState<Video[]>([])  
  const lowerCase = keywords.toLowerCase()

  const stringSplit = lowerCase.split(" ")
    
  useEffect(() => {
  getRelatedVideos(stringSplit[2]).then((data) => setVideos(data))

  },[])

  return (
    <aside>
        <h3>Related Videos</h3>
        <div>
            {videos.map((video,index) => (
                <article key={index}>
                    <Link className="gap-2" to={`/video/${video.id}/${video.keywords}`} target="_blank">
                       <img className="size-60 border-gray-600 rounded-md" src={video.default_thumb.src} alt={video.title} />
                       <h4 className="truncate">{video.title}</h4>
                    </Link>
                </article>
            ))}
        </div>
    </aside>
  )
}

// Some example response: ', creampie, japanese, old man, blowjob, big tits, milf, Forbidden Care Suikawa Yuri 476'

