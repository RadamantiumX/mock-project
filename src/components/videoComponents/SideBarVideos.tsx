import { getRelatedVideos } from "../../services/resources"
import { useEffect, useState } from "react"
import { Video } from "../../types/eporner" // Update import statement for Video type
import { Link } from "react-router-dom"
import { Ghost } from "../icons/Ghost"

interface Props {
    keywords: string
    title: string,
    views: number
}

export const SideBarVideos:React.FC<Props> = ({ keywords }) => {
    const [videos, setVideos] = useState<Video[]>([])  
    const [counter, setCounter] = useState<number>(0)
    const [loading, setLoading] = useState(true)
    const lowerCase = keywords.toLowerCase()

    const stringSplit = lowerCase.split(" ")
    
    const handleResults = () => {
        setCounter(counter + 1)
        getRelatedVideos(stringSplit[counter])
            .then((data) => {
                setVideos(data)
            })
    } 
    
    useEffect(() => {
        getRelatedVideos(stringSplit[counter])
            .then((data) => {
                setVideos(data)
                setLoading(false)
            }) 
    },[])

    return (
        <section className="ml-10 mr-10 mb-10">
        <h3 style={{fontSize:"1.4rem", color:"#DBDBDB"}} className="text-lg font-semibold pb-2 border-b border-gray-300 mb-4">Related Videos</h3>
        {loading ? (
            <div>Cargando</div>
        ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {videos.length !== 0 ? (
                    videos.map((video, index) => (
                        <article key={index} className="col-span-1">
                            <Link to={`/video/${video.id}/${video.keywords}/${video.title}/${video.views}`} target="_blank">
                                <img className="w-full rounded-md mb-2" src={video.default_thumb.src} alt={video.title} />
                                <h4 className="truncate">{video.title}</h4>
                            </Link>
                        </article>
                    ))
                ) : (
                    <div className="col-span-6">
                        <h3 className="text-lg">We can't found related videos <Ghost/></h3>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleResults}>Cargar más resultados</button>
                    </div>
                )}
            </div>
        )}
    </section>
    
    )
}
