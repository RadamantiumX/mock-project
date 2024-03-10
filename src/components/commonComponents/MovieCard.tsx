import React from 'react'
import { Link } from 'react-router-dom'

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

    const replaceString: string = keywords.replace(" ,", "-")
  return (
    <>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">


<div className="rounded overflow-hidden shadow-lg flex flex-col">
    <a href="#"></a>
    <div className="relative"><Link to={`/video/${id}`}>
            <img className="w-full"
                src={image}
                alt="Sunset in the mountains"/>
            <div
                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
            </div>
        </Link>
        <a href="#!">
            <div
                className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Cooking
            </div>
        </a>
    </div>
    <div className="px-6 py-4 mb-auto">
        <Link to={`/video/${id}/${replaceString}`}
            className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2 truncate">{title}</Link>
        <p className="text-gray-500 text-sm border rounded-md text-center">
            {lengthMin} 
        </p>
    </div>
    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span  className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg height="13px" width="13px" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 512 512"
                xmlSpace="preserve">
                <g>
                    <g>
                        <path
                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                        </path>
                    </g>
                </g>
            </svg>
            <span className="ml-1">6 mins ago</span>
        </span>

        <span  className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                </path>
            </svg>
            <span className="ml-1">{views} Views</span>
        </span>
    </div>
</div>

</div>




{/* <article className="max-w-sm  border rounded-lg shadow bg-gray-800 border-gray-700">
   
    <div className="p-5">
        <a href={url} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{title}</h5>
        </a>
        <a href={url}>
          <img src={image} alt={title} />  
        </a>
        
        


    </div>
</article> */}

</>

  )
}

