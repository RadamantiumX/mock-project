import { MovieCard } from "../commonComponents/MovieCard"
import { type Response } from "../../types/redtube"
// import { useState } from "react"

interface Props{
    source: Response[]

}

export const ModelVideosRelated:React.FC<Props> = ({ source }) => {

  // to refactor
 
  
   /* const toFlat = (arr) =>{
      const [arrayFlat, setArrayFlat] = useState([])
       arr.map((item:any | never)=>{
       arrayFlat.push(item.tag_name)
    })
  
    return JSON.stringify(arrayFlat)
    }*/
   
  

  return (
    <section className="mb-10 ml-3 mr-3 lg:mr-10 lg:ml-10">
    <div className="">
     <h5 className="text-2xl font-bold">Most Recent Videos</h5>
    </div> 
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
  {source?.map((item) => (
    <div key={item.video_id}>
      <MovieCard
        title={item.title}
        image={item.default_thumb}
        id={item.video_id + "redtube"}
        lengthMin={item.duration}
        views={item.views}
        keywords={item.title}
      />
    </div>
  ))}
</div>

  </section>
  )
}
