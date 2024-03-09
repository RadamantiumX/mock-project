import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    title: string,
    url: string,
    image: string,
    id: string
}

export const MovieCard:React.FC<Props> = ({ title, url, image, id }) => {
  return (
<article className="max-w-sm  border rounded-lg shadow bg-gray-800 border-gray-700">
   
    <div className="p-5">
        <Link to={`/video/${id}`} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{title}</h5>
        </Link>
        <Link to={`/video/${id}`}>
          <img src={image} alt={title} />  
        </Link>
    </div>
</article>

  )
}

