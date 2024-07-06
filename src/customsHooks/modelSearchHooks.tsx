import { useState, useEffect } from "react"
import { pornHubSearchModel } from "../services/scraping"
import type { Datum } from "../types/phubScrapingData"

export const useModelSearch = (searchModel:string | null) => {
    const [models, setModels] = useState<Datum[]>([])
    useEffect(()=>{
         pornHubSearchModel(searchModel)
          .then((response)=>{
            setModels(response)
          })
          .catch(err=>{
            console.log(err)
          })
    },[searchModel])
  return {models}
  }