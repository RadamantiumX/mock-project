import { VideoSelected } from "../components/videoComponents/VideoSelected"
import { useParams } from "react-router-dom"
import { SideBarVideos } from "../components/videoComponents/SideBarVideos"

type Params = {
  id: string;
  keywords: string;
  title: string;
}
type ParamsNumber = {
  views: number;
}

export default function Video() {
  const { id, title, keywords } = useParams<Params>();
  const { views } = useParams<ParamsNumber>();

  return (
    <main>
      <div className="gap-20">
        <VideoSelected id={id} title={title} views={views} />
        <SideBarVideos keywords={keywords} />
      </div>
    </main>
  );
}


/**
 * ❗ Realizar una QUERY donde se obtengan resultados a partir de una query 
 * ❗ Utilizamos los "Keywords" de esa query para el fetch en related VIDEOS.
 * 
 */