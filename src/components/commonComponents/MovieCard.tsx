import React from 'react'
import { Link } from 'react-router-dom'
import { Eye } from '../icons/Eye'
import './movieCard.scss'

/**
 * Props:
 *  - Title: Es el titulo principal de cada elemento (video)
 *  - imagen: Imagen de la minuatura del video
 *  - id: Id del elemento (video)
 *  - lengthMin: Tiempo de duración del video (en minutos) 
 *  - views: Cantidad de visualizaciones del video
 * 
 */

interface Props {
    title: string,
    image: string,
    id: string,
    lengthMin: string,
    views: number,
    keywords: string
}

export const MovieCard:React.FC<Props> = ({ title, image, id, lengthMin, views, keywords }) => {
  return (
    <> 
          <div className="block relative group transition max-w-sm mx-auto mt-3 mb-4">
              <Link to={`/video/${id}/${keywords}/${title}/${views}`} className="block">
                  <div className="aspect-w-2 aspect-h-1 rounded-2xl shadow overflow-hidden bg-gray-100 relative">
                      <Link to={`/video/${id}/${keywords}/${title}/${views}`}>
                          <img src={image} loading="lazy" className="object-center object-cover" alt='Image Porn dirtyhub'/>
                          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white ml-2 mb-1 p-2 text-sm">{lengthMin} min</div>
                      </Link>
                  </div>
                  <div className="p-2 space-y-1">
                      <div className="flex items-start justify-between gap-4">
                          <h3 className="flex-1 text-base font-medium text-gray-100 truncate-multiline">
                              <Link to={`/video/${id}/${keywords}/${title}/${views}`}>
                                  {title}
                              </Link>
                            
                          </h3>
                          <span className="mt-1 shrink-0 text-xs inline-flex items-center gap-1">
                              {views}
                              <Eye size={'w-3 h-3 '}/>
                          </span>
                      </div>
                  </div>
              </Link>
          </div>
       
</>

  )
}

