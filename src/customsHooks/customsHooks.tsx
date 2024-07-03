/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState, useEffect, SetStateAction, Dispatch } from "react";
import { useLocation } from "react-router-dom";
import { pornHubDataModels } from "../services/scraping";
import { pornHubInfoModel } from "../services/scraping";
import { pornHubPicsAlbums } from "../services/scraping";
import { getModelVideos } from "../services/resources";
import { pornHubSearchModel } from "../services/scraping";
import { type Datum } from "../types/phubScrapingData";
import { type ModelInfoDetail } from "../types/phubScrapingData";
import { type Response } from "../types/redtube";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getEpornerSource } from "../redux/epornerSources/sourceSlice"
import { getOrderVideos } from "../services/resources";
import { getRelatedVideos } from "../services/resources";
import { getSearchContent } from "../services/resources";
import { useNavigate } from "react-router-dom";
import axiosClientAuth from "../services/axios-client-auth";
import { useStateContext } from "../contexts/ContextProvider";
import { Video } from "../types/eporner";
import { getPostsSource } from "../redux/postSources/postsSlice";
import { getReplysSource } from "../redux/replySources/replysSlice";
import { getLikesSource } from "../redux/likeSources/likesSlice";

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
   return {modelVideos}
}


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



export const useFetchPost = () => {
 const postData =
 useCallback(async (url:string, payload:any)=>{
 const response = await fetch(`http://localhost:3000${url}`, {
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



export const usePagination = (itemsPage:number[], currentPage:number, range:number | any) => {
   const start = currentPage - 1
   const end = currentPage + range

   const rangePage = itemsPage.slice(start, end)

   return {rangePage}
}

export const useOrderVideos = (param:string | undefined, page:number | null) => {
   const [orderVideos, setOrderVideos] = useState<Video[]>([])
   const [totalPages, setTotalPages] = useState<any>()
  useEffect(() => {
    getOrderVideos(page, param)
     .then((data)=>{
       setOrderVideos(data.videos)
       setTotalPages(data.total_pages)
     })
     .catch(error=>{
      console.error('Something was wrong')
      console.error(error.message)
     })
  }, [param, page])

  return { orderVideos, totalPages }
}

// Hay q pasarle la pagina
export const useHomeVideos = (page:any) => {
  const [counter, setCounter] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const dispatch = useAppDispatch();
  const eporner = useAppSelector((state) => state.source.data);

  const handleResults = () => {
    setIsLoading(true); 
    setCounter(counter + 10);
  };

  useEffect(() => {
    dispatch(getEpornerSource(page)).then(() => {
      setIsLoading(false); 
    });
  }, [counter]);

  return {isLoading, eporner, handleResults}
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

export const useDropDownCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
 return {isOpen, handleMouseEnter, handleMouseLeave}
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

export const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: SetStateAction<number>) => {
       setActiveTab(index);
    };

    return { activeTab, handleTabClick }
}
  


export const usePicsAlbums = (page: number, tag:string | null) => {
  const [pics, setPics] = useState<any[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pages, setPages] = useState<any>()

  useEffect(()=>{
    pornHubPicsAlbums(page, tag)
      .then((data)=>{  
        setPages(data.pages)
        setPics(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[tag])

  return { pics, pages }
}

export const useShowForm = () => {
  const { token } = useStateContext()
  const [showForm, setShowForm] = useState(false)
  const navigate = useNavigate()

  const handleFormResponse = () => {
    if (token){
       !showForm ? setShowForm(true) : setShowForm(false)
    }else{
      navigate('/auth/portal/signin')
    }
  }

  return { showForm, handleFormResponse }

}

export const useShowArticle = (id:any, nick_name:any) => {
  const { setPostId, nickname } = useStateContext()
  const [currentUser, setCurrentUser] = useState(false)
  const [showArticle, setShowArticle] = useState(false)
  const data = useAppSelector( state => state.replys.data )
  const [responses] = useState<any>([])

  useEffect(() =>{
    setPostId(id)
    data.forEach((item:any, index:any)=>{
       if (item.postId === id){
         responses.push(data[index])
       }
    })
    
    if (nickname === nick_name)setCurrentUser(true)  
    
   },[id])
return { currentUser, responses, showArticle, setShowArticle }
}

export const usePosts = (id:string) => {
  const { token }: any = useStateContext()
  const data: any = useAppSelector(state => state.posts.data)
  
  const dispatch = useAppDispatch()

  useEffect(() => { 
    dispatch(getReplysSource())

    if (id) {
      dispatch(getPostsSource(id))
    }
  }, [id, token])
 return { token, data }
}

export const useEmbed = (id:string) => {
  const [redtubeId, setRedtubeId] = useState("")

  useEffect(()=>{
    if(id?.includes("redtube")){
        const arrayId = id.split("redtube")
        setRedtubeId(arrayId[0])
    }
  },[redtubeId])

  return {redtubeId}
}

export const useAddPost = () =>{

}

export const useSocialLike = (videoId:string | undefined, setFillLike:Dispatch<SetStateAction<string>>, setFillDislike:Dispatch<SetStateAction<string>>) => {
  const [color, setColor] = useState('')
  const [count, setCount] = useState(0)
  const [ average, setAverage ] = useState(0)
  const { token } = useStateContext()
  const dispatch = useAppDispatch() 

  useEffect(()=>{
  

    // When the state is Fullfilled, we set the like or dislike if the user choose one before
     if(token){
        const payload = {token: token, videoId: videoId}
        dispatch(getLikesSource({payload}))
        .unwrap()
        .then((response)=>{
          if(response.like){
            setFillLike('white')
            setCount(response.count_likes)
            if(response.count_likes> 0){
              setAverage(response.count_likes / response.count_total * 100)
                  
            }    
          }else{
            setFillDislike('white')
          }
          
        })
        .catch(err=>{
          const res = err.response
          console.log(res)
        })
        
     }
  
     if(average < 49) 
      {
         setColor('white')
         console.log(average)
  
       }else{
         setColor('white')
        }
            
   },[token, videoId, average, color])

   return { count, color, average }
}



export const useSocialLikeEvent = (videoId:string | undefined) => {
  const like = true
  const dislike = false
  const { token, setNotification } = useStateContext()
  const [fillLike, setFillLike] = useState('none')
  const [fillDislike, setFillDislike] = useState('none')
  
  const handleLike = async () => {
    if (fillLike === 'none'){
        setFillLike('white')
        setFillDislike('none')
        
        await axiosClientAuth.post('/like/add',{token, videoId, like})
         .then(({data})=>{
           setNotification(data.message)
         })
         .catch(error=>{
        console.error('Something was wrong')
        console.error(error.message)
        })
        }else{
        setFillLike('none')
        await axiosClientAuth.post('/like/del',{token, videoId})
        .then(({data})=>{
       console.log(data)
        })
        .catch(err=>{
       const res = err.response
       console.log(res)
       })
        }     
} 

const handleDislike = async () => {
  if (fillDislike === 'none'){
    setFillDislike('white')
    setFillLike('none')
    const payload = {
        token: token,
        videoId: videoId,
        like: dislike
    }
    await axiosClientAuth.post('/like/add',payload)
    .then(({data})=>{
      setNotification(data.message)
    })
    .catch(err=>{
   const res = err.response
   console.log(res)
   })
  }else{
    setFillDislike('none')
    await axiosClientAuth.post('/like/del',{token, videoId})
    .then(({data})=>{
   console.log(data)
    })
    .catch(err=>{
   const res = err.response
   console.log(res)
   })
  }
}

return { handleLike, handleDislike, fillLike, fillDislike, setFillLike, setFillDislike }

}

 



