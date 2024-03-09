import {VideoSelected} from "../components/videoComponents/VideoSelected"
import { useParams } from "react-router-dom"
type Param = {
  id: string;
}
export default function Video() {
  const { id } = useParams()

  return (
    <main>
      <VideoSelected id={id}/>
   </main>
  )
}
