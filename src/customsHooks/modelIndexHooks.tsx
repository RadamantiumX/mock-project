import { useState, useEffect } from "react"
import { getModelVideos } from "../services/resources"
import { pornHubInfoModel } from "../services/scraping"
import type { Response } from "../types/redtube"
import type { ModelInfoDetail } from "../types/phubScrapingData"

export const useFetchModelVideos = (name:string | undefined) => {
    const [modelVideos, setModelVideos] = useState<Response[]>([])
 
    useEffect(()=>{
      getModelVideos(name)
        .then((data)=>{
          setModelVideos(data.response)
        })
        .catch(err=>{
         console.log(err)
        })
    },[name])
    return {modelVideos}
 }


 export const useFetchModelInfo = (name:string | undefined) => {
    const [model, setModel] = useState<ModelInfoDetail>()

    useEffect(()=>{
      pornHubInfoModel(name)
        .then((data)=>{
           setModel(data)
        })
        .catch(err=>{
          console.log(err)
        })
    },[name])
  
    return {model}
}