import { MovieCard } from "../commonComponents/MovieCard"
import { type Video } from "../../types/eporner"
interface Props {
  source: Video[] | undefined
}

export const Videos: React.FC<Props> =  ({ source }) => {
 
  return (
    <section>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-1 justify-center mt-12 mb-12">
      {source?.map((item) => (
        <div key={item.id}>
          <MovieCard title={item.title} image={item.default_thumb.src} id={item.id} lengthMin={item.length_min} views={item.views} keywords={item.keywords}/>
        </div>
      ))}
    </div>
  </section>
  )
}