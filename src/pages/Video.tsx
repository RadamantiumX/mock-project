import {VideoSelected} from "../components/videoComponents/VideoSelected"
import { useParams } from "react-router-dom"
import { SideBarVideos } from "../components/videoComponents/SideBarVideos"

type Param = {
  id: string;
  keywords: string;
}
export default function Video() {
  const { id } = useParams()
  const { keywords } = useParams()
  return (
    <main>
      <div className="flex flex-row gap-20">
      <VideoSelected id={id}/>
      <SideBarVideos keywords={keywords}/>
      </div>
   </main>
  )
}

/**
 * ❗ Realizar una QUERY donde se obtengan resultados a partir de una query 
 * ❗ Utilizamos los "Keywords" de esa query para el fetch en related VIDEOS.
 * 
 */