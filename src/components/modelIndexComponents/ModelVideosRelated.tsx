import { MovieCard } from "../commonComponents/MovieCard"
import { type VideoElement } from "../../types/redtube"

interface Props{
    source: VideoElement[]

}

export const ModelVideosRelated:React.FC<Props> = ({ source }) => {
  return (
    <section>
    <div className="mt-20">
     <h5 className="text-2xl font-bold">Related Videos</h5>
    </div> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-1 justify-center mt-12 mb-12">
    
      {source?.map((item) => (
        <div key={item.video.video_id}>
          <MovieCard title={item.video.title} image={item.video.default_thumb} id={item.video.video_id+"redtube"} lengthMin={item.video.duration} views={item.video.views} keywords={JSON.stringify(item.video.tags)}/>
        </div>
      ))}
    </div>
  </section>
  )
}
