/* eslint-disable @typescript-eslint/no-explicit-any */
// import axiosClientAuth from "../services/axios-client-auth"
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";


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



export const useRange = (itemsPage:number[], start:number, end:number) =>{
    
    const rangePage = itemsPage.slice(start, end)
    
    
    
    return {rangePage}
}



export const usePagination = (itemsPage:number[], currentPage:number, range:number) => {
   const start = currentPage - 1
   const end = currentPage + range

   const rangePage = itemsPage.slice(start, end)

   return {rangePage}
}

  



