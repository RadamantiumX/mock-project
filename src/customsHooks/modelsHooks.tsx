import { useState, useEffect } from "react"
import type { Datum } from "../types/phubScrapingData"
import { pornHubDataModels } from "../services/scraping"

export const useFetchModels = (page:number) =>{
    const [models, setModels] = useState<Datum[]>([])
    const [count, setCount] = useState<number>(0)
   
     useEffect(()=>{
   
      if(page !== null){
       pornHubDataModels(page)
         .then((response)=>{
           setModels(response.data)
           console.log(response.data)
           setCount(response.paging.totalPages)
         })
         .catch(err=>{
           console.log(err)
         })
       }else{
         pornHubDataModels(1)
         .then((response)=>{
           setModels(response.data)
           setCount(response.paging.totalPages)
         })
         .catch(err=>{
           console.log(err)
         })
       } 
     },[count])
      return {models, count} 
   }