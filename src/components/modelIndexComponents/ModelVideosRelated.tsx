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
    <section>
    <div className="mt-20">
     <h5 className="text-2xl font-bold">Most Recent Videos</h5>
    </div> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-1 justify-center mt-12 mb-12">
    
      {source?.map((item) => (
        <div key={item.video_id}>
          <MovieCard title={item.title} image={item.default_thumb} id={item.video_id+"redtube"} lengthMin={item.duration} views={item.views} keywords={item.title}/>
        </div>
      ))}
    </div>
  </section>
  )
}
