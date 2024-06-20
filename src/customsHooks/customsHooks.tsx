/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pornHubDataModels } from "../services/scraping";
import { pornHubInfoModel } from "../services/scraping";
import { getModelVideos } from "../services/resources";
import { pornHubSearchModel } from "../services/scraping";
import { type Datum } from "../types/phubScrapingData";
import { type ModelInfoDetail } from "../types/phubScrapingData";
import { type Response } from "../types/redtube";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getEpornerSource } from "../redux/epornerSources/sourceSlice"


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
  console.log(modelVideos)
   return {modelVideos}
}


export const useModelSearch = (searchModel:string | null) => {
  const [models, setModels] = useState<Datum[]>([])
  useEffect(()=>{
       pornHubSearchModel(searchModel)
        .then((data)=>{
          setModels(data)
        })
        .catch(err=>{
          console.log(err)
        })
  },[searchModel])
return {models}
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

export const useVideosForCategory = (category:string | undefined) => {
  const replaceSpace = category?.replace(/ /gi, "") // Replace white spaces for unify the string 
  const [counter, setCounter] = useState<number>(7)

  const dispatch = useAppDispatch()
  const eporner = useAppSelector(state => state.source.data)

  const handleResults = () =>{
    setCounter(counter + 7)
  }
  useEffect(()=>{ 
    const payload = replaceSpace?.concat(" ", counter.toString())
    // Prevent EXTRA typing ♻
    if (category !== undefined ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(getEpornerSource(payload as any))
    
  }

  },[category, counter]) // ✅Component data is refreshed when "category" is updated

  return {eporner, handleResults, counter}
} 


export const useHomeVideos = () => {
  const [counter, setCounter] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const dispatch = useAppDispatch();
  const eporner = useAppSelector((state) => state.source.data);

  const handleResults = () => {
    setIsLoading(true); 
    setCounter(counter + 10);
  };

  useEffect(() => {
    dispatch(getEpornerSource(counter)).then(() => {
      setIsLoading(false); 
    });
  }, [counter]);

  return {isLoading, eporner, handleResults}
}
  



