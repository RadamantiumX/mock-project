import { VideoSelected } from "../components/videoComponents/VideoSelected"
import { useParams } from "react-router-dom"
import { SideBarVideos } from "../components/videoComponents/SideBarVideos"

type Params = {
  id: string;
  keywords: string;
}
import { VideoSelected } from "../components/videoComponents/VideoSelected";
import { useParams } from "react-router-dom";
import { SideBarVideos } from "../components/videoComponents/SideBarVideos";

export default function Video() {
  const { id } = useParams<Params>()
  const { keywords } = useParams<Params>()
  const { id, title, keywords, views } = useParams<{ id: string; title: string; keywords: string; views: number  }>();

  return (
    <main>
      <div className="gap-20">
        <VideoSelected id={id} title={title} keywords={keywords} views={views} />
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