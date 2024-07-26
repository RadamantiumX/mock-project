/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { latestReplys } from "../services/api";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getPostsSource } from "../redux/postSources/postsSlice";
import axiosClientAuth from "../services/axios-client-auth";
import { getLikesSource } from "../redux/likeSources/likesSlice";
import { useNavigate } from "react-router-dom";
import { error } from "console";


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

export const useFetchFav = ({payload}:any) => {
   const [favorite, setFavorite] = useState()

   useEffect(()=>{
    axiosClientAuth.post('/social/fav',{payload})
   .then(({data})=>{
    console.log(data)
    setFavorite(data)
   })
   .catch(error=>{
    console.log(error.message)
   })
   },[])
   
   return {favorite}
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

  export const useShowArticle = (nick_name:any, id:any) => {
    const { setPostId, nickname } = useStateContext()
    const [currentUser, setCurrentUser] = useState(false)
    const [showArticle, setShowArticle] = useState(false)  
    useEffect(() =>{
     setPostId(id)
      if (nickname === nick_name)setCurrentUser(true)  
      
     },[id])
  return { currentUser, showArticle, setShowArticle}
  }

  export const useResponses = (id:any) => {
    const [responses, setResponses] = useState<any>([])
  
    useEffect(()=>{
      latestReplys(id)
      .then((data)=>{
        setResponses(data)
      })
      .catch(error=>{
        console.log(error.message)
      })
    },[id])
  
    return { responses, setResponses }
  }

  export const usePosts = (id:string) => {
    const { token }: any = useStateContext()
    const data: any = useAppSelector(state => state.posts.data)
    
    const dispatch = useAppDispatch()
  
   
  
    useEffect(() => { 
      
  
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

  export const useSocialLikeEvent = (videoId:string | undefined, id:number | undefined, path:string) => {
    const like = true
    const dislike = false
    const { token, setNotification } = useStateContext()
    const [fillLike, setFillLike] = useState('none')
    const [fillDislike, setFillDislike] = useState('none')
    
    const handleLike = async () => {
      if (fillLike === 'none'){
          setFillLike('white')
          setFillDislike('none')
          
          await axiosClientAuth.post(`/like/add-${path === 'response' ? 'post': path}`, videoId !== undefined ? {token, videoId, like}: {token, id, path})
           .then(({data})=>{
             setNotification(data.message)
           })
           .catch(error=>{
          console.error('Something was wrong')
          console.error(error.message)
          })
          }else{
          setFillLike('none')
          await axiosClientAuth.post(`/like/del-${path === 'response' ? 'post': path}`,videoId !== undefined ? {token, videoId}:{token, id, path})
          .then(({data})=>{
            setNotification(data.message)
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
      await axiosClientAuth.post('/like/add-video',payload)
      .then(({data})=>{
        setNotification(data.message)
      })
      .catch(err=>{
     const res = err.response
     console.log(res)
     })
    }else{
      setFillDislike('none')
      await axiosClientAuth.post('/like/del-video',{token, videoId})
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
            console.error('Something was wrong')
            console.error(err.message)
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


  export const useCurrentLikePost = (setFillLike:Dispatch<SetStateAction<string>>, id:any, path:string) => {
    const {token} = useStateContext()
    const [total, setTotal] = useState<number>(0)
     

     useEffect(() =>{
      axiosClientAuth.post(`/like/current-${path}`, {token, id})
         .then(({data})=>{
            console.log(data.message)
            setFillLike(data.message)
            setTotal(data.total)
         })
         .catch(error=>{
           console.error('Something was wrong')
           console.error(error.message)
         })
     },[id])

     return {total}
  }


  export const useDeletePost = (id:any, path:string) => {
     const navigate = useNavigate()
     const { setNotification, token } = useStateContext()


    const handlePostDelete = ():void => {
      const payload = {
        id: id,
        token: token,
        path: path
      }
      axiosClientAuth.post('/post/del', payload)
        .then(({data})=>{
          setNotification(data.message)
          setTimeout(()=>{
            navigate(0)
          },2000)
        })
        .catch(error=>{
          console.log(error)
        })    
 }
return {handlePostDelete} 
}

export const useCurrentUser = (_nickname:string | null) => {
  const [currentUser, setCurrentUser] = useState(false)
  const { nickname } = useStateContext()

  useEffect(()=>{
      if(nickname === _nickname) setCurrentUser(true)
   },[nickname])

  return { currentUser }
}

export const useNewPost = (id:string | undefined) => {
  const { token, setNotification } = useStateContext()
  const [content, setContent] = useState('')
  const dispatch = useAppDispatch()
   

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(content.length === 0)  {
     setNotification('Empty content...')
     return
    }
    const payload = {
        token: token,
        content: content,
        videoId: id
    }
      await axiosClientAuth.post('/post/new-post',payload)
       .then(({data})=>{
         setNotification(data.message)
         setContent('')// <--- reset form
         dispatch(getPostsSource(id)) // <--- Change the state
          .catch(error => {
            console.error(error.message)
          })
       })
       .catch( error => {
         console.error('Something was wrong')
         console.error(error.message)
       })

  }

  return { handleSubmit, content, setContent }
}

export const useNewResponse = (id:number) => {
  const { token, setNotification } = useStateContext()
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(content.length === 0)  {
      setNotification('Empty content...')
      return
     }
  
     const payload = {
        token: token,
        content: content,
        postId: id,
     }

     await axiosClientAuth.post('/post/new-response',payload)
     .then(({data})=>{
       
       setNotification(data.message)
       setTimeout(()=>{
        setContent('')// <--- reset form
        navigate(0)
       },2000)
       
     })
     .catch( error => {
       console.error('Something was wrong')
       console.error(error.message)
     
     })
  }

  return { handleSubmit, content, setContent }
}