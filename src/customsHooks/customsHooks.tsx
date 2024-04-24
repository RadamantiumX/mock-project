/* eslint-disable @typescript-eslint/no-explicit-any */
// import axiosClientAuth from "../services/axios-client-auth"
import { useCallback } from "react";


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
  // const json = await response.json()

  if (!response.ok){
    return response
  }
  if(response.ok){
    return response
}
 },[])
 
return { postData }
}

  



