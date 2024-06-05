// import { getModelVideos } from "../services/resources"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClientAuth from "../services/axios-client-auth"
import { type ModelInfoDetail } from "../types/phubScrapingData"
import { ModelCardIndex } from "../components/modelIndexComponents/ModelCardIndex"

export default function ModelIndex() {
 const { name } = useParams<string>() 
  const [model, setModel] = useState<ModelInfoDetail>()


useEffect(()=>{
  axiosClientAuth(`/phub/model-info/${name}`)
   .then((data)=>{
     console.log(data.data)
     setModel(data.data)
   })
   .catch(err=>{
    console.log(err)
   })
},[name])
  return (
    <main>
      <section>
        <ModelCardIndex name={model?.name} cover={model?.cover} about={model?.about} avatar={model?.avatar} height={model?.height} weight={model?.weight} gender={model?.gender}/> 
      </section>
       
    </main>
  )
}

