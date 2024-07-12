import { Trash } from "../icons/Trash"
import { Link } from "react-router-dom"
import { useDelFav } from "../../customsHooks/favVideosHooks"

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
    id: string,
    default_thumb: string,
    title: string
    keywords: string
    views: number
}

export const VideoFavCard:React.FC<Props> = ({id, default_thumb, title, keywords, views}) => {
  const {handleDeleteFav} = useDelFav(id)
  return (
    
    <article className="relative m-2">

    <div className="flex gap-5" key={id}>
      <Link to={`/video/${id}/${keywords}/${title}/${views}`}>
      <img className="rounded-md w-40 h-auto md:w-auto" src={default_thumb} alt={title} title={`Image for: ${title}`}/>
      <div className="flex flex-col">
        <h5 className="text-justify sm:text-sm lg:text-xl font-bold text-white">{title}</h5>
        <p className="text-sm text-gray-400">1 month ago</p>
      </div>
      </Link>
      <div className="absolute bottom-0 right-0 mr-2 mb-2 text-sm text-white underline group" onClick={handleDeleteFav}>
         
        <Trash/>
        <span className="absolute hidden text-white bg-gray-700 rounded-md p-3  bottom-full -left-20 transform -translate-x-7 -translate-y-1 group-hover:block whitespace-nowrap">Eliminar de favoritos</span>
      </div>
    </div>
  </article>
 
  
  
  )
}
