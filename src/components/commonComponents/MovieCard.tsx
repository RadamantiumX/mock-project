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

export const MovieCard: React.FC<Props> = ({ title, image, id, lengthMin, views, keywords }) => {
    return (
        <>
            <div className="relative block max-w-sm mx-auto mt-3 mb-4 transition group" >
                <Link reloadDocument to={`/video/${id}/${keywords}/${title}/${views}`} className="block">
                    <div className="relative max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 group">
                        <Link to={`/video/${id}/${keywords}/${title}/${views}`} className="block">
                            <img
                                src={image}
                                loading="lazy"
                                alt={`Video Thumbnail: ${title}`}
                                title={title}
                                className="object-cover object-center w-full h-full"
                            />
                            <div className="absolute bottom-0 left-0 p-2 mb-2 ml-2 text-xs font-semibold text-white bg-black rounded-lg bg-opacity-60">
                                {lengthMin} min
                            </div>
                        </Link>
                    </div>
                    <div className="p-2 space-y-1">
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="flex-1 text-base font-medium text-gray-100 truncate-multiline">
                                <Link reloadDocument to={`/video/${id}/${keywords}/${title}/${views}`}>
                                    {title}
                                </Link>

                            </h3>
                            <span className="inline-flex items-center gap-1 mt-1 text-xs shrink-0">
                                {views}
                                <Eye size={'w-3 h-3 '} />
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

        </>

    )
}

