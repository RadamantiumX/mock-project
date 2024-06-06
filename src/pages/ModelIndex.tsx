import { getModelVideos } from "../services/resources"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClientAuth from "../services/axios-client-auth"
import { type ModelInfoDetail } from "../types/phubScrapingData"
import { ModelCardIndex } from "../components/modelIndexComponents/ModelCardIndex"
import { ModelVideosRelated } from "../components/modelIndexComponents/ModelVideosRelated"



export default function ModelIndex() {
 const { name } = useParams<string>() 
  const [model, setModel] = useState<ModelInfoDetail>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [modelData, setModelData] = useState<any>([])


useEffect(()=>{
  axiosClientAuth(`/phub/model-info/${name}`)
   .then((data)=>{

     setModel(data.data)
   })
   .catch(err=>{
    console.log(err)
   })

   getModelVideos(name)
     .then((data)=>{
        console.log(data)
        setModelData(data)
     })
     .catch(err=>{
      console.log(err)
     })
},[name])
  return (
    <main>
      <section>
        <ModelCardIndex name={model?.name} cover={model?.cover} about={model?.about} avatar={model?.avatar} height={model?.height} weight={model?.weight} gender={model?.gender}/> 
        <ModelVideosRelated source={modelData}/>
      </section>
       
    </main>
  )
}

