import React from 'react'
import { Link } from 'react-router-dom'
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
    views: number
}

export const MovieCard:React.FC<Props> = ({ title, image, id, lengthMin, views }) => {
  return (
    <>
   
          <div className="block relative group transition max-w-sm mx-auto mt-3 mb-4">
              <a href="#" target="_blank" className="block">
                  <div className="aspect-w-2 aspect-h-1 rounded-2xl shadow overflow-hidden bg-gray-100 relative">
                      <Link to={`/video/${id}`}>
                          <img src={image} loading="lazy" className="object-center object-cover" />
                          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white ml-2 mb-1 p-2 text-sm">{lengthMin} min</div>
                      </Link>
                  </div>
                  <div className="p-2 space-y-1">
                      <div className="flex items-start justify-between gap-4">
                          <h3 className="flex-1 text-base font-medium text-gray-100 truncate-multiline">
                              <Link to={`/video/${id}`}>
                                  {title}
                              </Link>
                          </h3>
                          <span className="mt-1 shrink-0 text-xs inline-flex items-center gap-1">
                              {views}
                              <svg className="w-3 h-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                  fill="currentColor" aria-hidden="true">
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                  <path fillRule="evenodd"
                                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                      clipRule="evenodd"></path>
                              </svg>
                          </span>
                      </div>
                  </div>
              </a>
          </div>
       
</>

  )
}

