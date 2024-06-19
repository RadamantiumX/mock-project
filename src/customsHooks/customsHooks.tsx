/* eslint-disable @typescript-eslint/no-explicit-any */
// import axiosClientAuth from "../services/axios-client-auth"
import { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pornHubDataModels } from "../services/scraping";
import { type Datum } from "../types/phubScrapingData";


const MAX_TITLE_WORDS = 10; 

export const useTruncateTitle = (title:string | undefined) => {
  const words = title?.split(' ');
  if (words !== undefined) {
  if (words?.length > MAX_TITLE_WORDS || words !== undefined) {
    return words?.slice(0, MAX_TITLE_WORDS).join(' ') + '...';
  }
}
  return title;
}

export const useFetchModels = (page:number) =>{
 const [models, setModels] = useState<Datum[]>([])
 const [count, setCount] = useState<number>(0)
 

  useEffect(()=>{

   if(page !== null){
    pornHubDataModels(page)
      .then((response)=>{
        setModels(response.models.data)
        setCount(response.count)
      })
      .catch(err=>{
        console.log(err)
      })
    }else{
      pornHubDataModels(1)
      .then((response)=>{
        setModels(response.models.data)
        setCount(response.count)
      })
      .catch(err=>{
        console.log(err)
      })
    } 
  },[count])
   return {models, count} 
}

export const useFetchPost = () => {
 const postData =
 useCallback(async (url:string, payload:any)=>{
 const response = await fetch(`http://localhost:4000${url}`, {
     method: "POST",
     headers: {
      "Content-Type": "application/json"
     },
     body: JSON.stringify(payload)
  })


  if (!response.ok){
    return response
  }
  if(response.ok){
    return response
}
 },[])
 
return { postData }
}

export const useQuery = () => new URLSearchParams(useLocation().search)



export const useRange = (start:number, end:number) =>{
    const [rangePages] = useState<number[]>([])
    const step = 1
    if (typeof end === 'undefined'){
      end = start
      start = 0
    }
  
    for ( let i = start; i < end; i += step){
       rangePages.push(i)
    }

    return { rangePages }
    
}



export const usePagination = (itemsPage:number[], currentPage:number, range:number) => {
   const start = currentPage - 1
   const end = currentPage + range

   const rangePage = itemsPage.slice(start, end)

   return {rangePage}
}

  



