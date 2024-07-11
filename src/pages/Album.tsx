import { useParams } from "react-router-dom"
import { useAlbumContent } from "../customsHooks/photosHooks"
import { PicCard } from "../components/albumComponents/PicCard"


export default function Album() {
  const { album, tag } = useParams()
  const { pics, title } = useAlbumContent(tag, album)

  
  return (
    <div>
      <h1>{title}</h1>
       {pics.map((item, key)=>(<PicCard preview={item.preview} title={title} key={key}/>))}
    </div>
  )
}


