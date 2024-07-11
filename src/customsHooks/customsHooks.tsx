/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRelatedVideos } from "../services/resources";
import { getSearchContent } from "../services/resources";
import { useNavigate } from "react-router-dom";
import axiosClientAuth from "../services/axios-client-auth";
import { useStateContext } from "../contexts/ContextProvider";
import { Video } from "../types/eporner";

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



export const usePagination = (itemsPage:number[], currentPage:number, range:number | any) => {
   const start = currentPage - 1
   const end = currentPage + range

   const rangePage = itemsPage.slice(start, end)

   return {rangePage}
}





export const useToogleButton = (onClick:()=>void | null) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
  
    onClick();
    setIsOpen(false);
  };

  return {isOpen, toggleDropdown, handleLogout}
}



export const useRelatedVideos = (query:any) => {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
     getRelatedVideos(query)
     .then((data)=>{
      setVideos(data.videos)
      setLoading(false)
     })
     .catch(error=>{
      console.error('Something was wrong')
      console.error(error.message)
     })
  },[])
   

     return {videos, loading}
}
export const useKeywords = (keywords:any) => {
  const lowerCase = keywords!.toLowerCase()
  const stringSplit = lowerCase.split(" ")
  const selection = stringSplit.filter((str:any) => str.length > 4 && str.length < 10)
  return {selection}
}

export const useTrimmedTags = (selection:string[]) => {
  const [limited, setLimited] = useState<string[]>([])
  const trimWord:string[] = []
  useEffect(()=>{
      // Remove words with coma ","  
  selection.forEach(sel =>{
    if (sel.includes(",")) {
       const trimmed:string = sel.substring(0,sel.length -1)
       trimWord.push(trimmed)
    }
  })
  setLimited(trimWord.slice(0,10)) // Set the tag state
  },[])

  return {limited}
}

export const useSearchVideos = (search:string | null, page: number | null) => {
  const [videosResults, setVideosResults] = useState<Video[]>([])
  const [totalPages, setTotalPages] = useState<any>()
  const replaceSpace:any = search?.replace(/ /gi, "") // Replace white spaces to unify the string 
  useEffect(()=>{ 
   
    // Prevent EXTRA typing ♻
    if (search !== undefined ) {
      getSearchContent(replaceSpace, page)
        .then((data)=>{
            setVideosResults(data.videos)
            setTotalPages(data.total_pages)
        })
        .catch(error=>{
          console.error('Something was wrong')
          console.error(error.message)
        })  
  }

  },[search]) // ✅Component data is refreshed when "query" is updated

  return {videosResults, totalPages}
}





export const useLogout = () => {
  const { token, setToken, nickname, setNickname, setPath } = useStateContext()
  const navigate = useNavigate()

  // If user LOGOUT --> GO TO --> AUTH PAGE
  const logout = () => {
    axiosClientAuth.post('/auth/logout')
      .then(() => {
        localStorage.clear() // Clear full storage
        setToken(null) // Token too
        setNickname(null)
        setPath('home')
        navigate('/redirect')
      })
      .catch(err => {
        const response = err.response
        console.log(response)
      })
}
return {token, nickname, logout}

}


export const useInputSearch = (path:string) => {
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)
 // const [query, setQuery] = useState("")
  const [border, setBorder] = useState("")
  const [query, setQuery] = useState("")
  const handleInput = (e:any) =>{
    setQuery(e.target.value)
  }

  const navigate = useNavigate()
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
       if(query.length > 0) {
       navigate(`/${path}?query=${query}`)
       setShow(false)
       setBorder("")
       setMessage("")
       setQuery("")
       }else{
           setShow(true)
           setBorder("border-2 border-red-900")
           setMessage("Please enter a query")
       }
    }
  }
return {query, border,message,show, handleInput, handleKeyDown}
}

export const useToggleFlag = (flagEsp:any, flagUk:any) => {
  const [selectedFlag, setSelectedFlag] = useState(flagEsp);

  const toggleFlag = () => {
    setSelectedFlag(selectedFlag === flagEsp ? flagUk : flagEsp);
  };

  return {selectedFlag, toggleFlag}
}












 



