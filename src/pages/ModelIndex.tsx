import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClientAuth from "../services/axios-client-auth"
import { type ModelInfoDetail } from "../types/phubScrapingData"
import { type Response } from "../types/redtube"
import { ModelCardIndex } from "../components/modelIndexComponents/ModelCardIndex"
import { ModelVideosRelated } from "../components/modelIndexComponents/ModelVideosRelated"



export default function ModelIndex() {
 const { name } = useParams<string>() 
  const [model, setModel] = useState<ModelInfoDetail>()
  const [modelVideos, setModelVideos] = useState<Response[]>([])


useEffect(()=>{
  axiosClientAuth(`/phub/model-info/${name}`)
   .then((data)=>{

     setModel(data.data)
   })
   .catch(err=>{
    console.log(err)
   })
 
   axiosClientAuth(`/rtube/model/${name}`)
     .then((data)=>{
      
       setModelVideos(data.data.response)
     })
     .catch(err=>{
      console.log(err)
     })

  
},[name])
  return (
    <main>
      <section>
        <ModelCardIndex name={model?.name} cover={model?.cover} about={model?.about} avatar={model?.avatar} height={model?.height} weight={model?.weight} gender={model?.gender}/> 
        <ModelVideosRelated source={modelVideos}/>
      </section>
       
    </main>
  )
}

