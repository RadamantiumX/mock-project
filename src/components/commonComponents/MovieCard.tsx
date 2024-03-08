import React from 'react'

interface Props {
    title: string,
    url: string,
    image: string
}

export const MovieCard:React.FC<Props> = ({ title, url, image }) => {
  return (
<article className="max-w-sm  border rounded-lg shadow bg-gray-800 border-gray-700">
   
    <div className="p-5">
        <a href={url} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{title}</h5>
        </a>
        <a href={url}>
          <img src={image} alt={title} />  
        </a>
        
        


    </div>
</article>

  )
}
