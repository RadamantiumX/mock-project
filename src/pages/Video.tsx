/* eslint-disable @typescript-eslint/no-explicit-any */
import { VideoSelected } from "../components/videoComponents/VideoSelected"
import { useParams } from "react-router-dom"
import { SideBarVideos } from "../components/videoComponents/SideBarVideos"
import { Comments } from "../components/videoComponents/Comments"


type Params = {
   id: string;
   keywords: string;
   title: string;
}

export default function Video() {
  const { id, title, keywords } = useParams<Params>();
  const { views } = useParams() as any; /** Temporal FIX 😎 */
  
  return (
    <main>
      <div className="gap-20">
        <VideoSelected id={id} title={title} views={views} />
        <SideBarVideos keywords={keywords} />
        <Comments />
      </div>
    </main>
  );
}
