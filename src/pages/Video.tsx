/* eslint-disable @typescript-eslint/no-explicit-any */
import { VideoSelected } from "../components/videoComponents/VideoSelected"
import { useParams } from "react-router-dom"
import { SideBarVideos } from "../components/videoComponents/SideBarVideos"
import { PostCommentForm } from "../components/videoComponents/PostCommentForm"
import { Comments } from "../components/videoComponents/Comments"
import { SingInButton } from "../components/videoComponents/SingInButton"

type Params = {
   id: string;
   keywords: string;
   title: string;
}

const TOKEN  = false


export default function Video() {
  const { id, title, keywords } = useParams<Params>();
  const { views } = useParams() as any; /** Temporal FIX 😎 */

  return (
    <main>
      <div className="gap-20">
        <VideoSelected id={id} title={title} views={views} />
        <SideBarVideos keywords={keywords} />
        {TOKEN ? <PostCommentForm />: <SingInButton/>}
        <Comments />
      </div>
    </main>
  );
}


/**
 * ❗ Realizar una QUERY donde se obtengan resultados a partir de una query 
 * ❗ Utilizamos los "Keywords" de esa query para el fetch en related VIDEOS.
 * 
 */