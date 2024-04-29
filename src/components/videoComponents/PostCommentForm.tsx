import { MessageCircle } from "../icons/MessageCircle"
import axiosClientAuth from "../../services/axios-client-auth"
import { useState, useEffect } from "react"
import { useStateContext } from "../../contexts/ContextProvider"
import { useAppDispatch } from "../../redux/hooks"
import { getPostsSource } from "../../redux/postSources/postsSlice"

export const PostCommentForm = () => {
  const { token, videoId, setNotification } = useStateContext()
  const [content, setContent] = useState('')
  const dispatch = useAppDispatch()
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = {
        token: token,
        content: content,
        videoId: videoId
    }
      await axiosClientAuth.post('/post/newpost',payload)
       .then(({data})=>{
         setNotification(data.message)
         setContent('')// <--- reset form
         dispatch(getPostsSource(videoId)) // <--- Change the state
       })
       .catch( err => {
         const res = err.response
         console.log(res)
       })

  }

  useEffect(()=>{
   // console.log(videoId)
  },[videoId])
  return (
    
  <form onSubmit={handleSubmit}>
    
<div id="commentsContainer" className="w-full md:w-1/2 p-2 pt-4 rounded shadow-lg mx-auto sm:ml-4">
  <div className="flex flex-col">
    <div>
      <h2 className="font-semibold flex flex-row gap-1"><MessageCircle/> Comment </h2>
    </div>
    
  </div>

  <div className="mt-3 p-3">
    <textarea id="content" value={content} onChange={(e)=>setContent(e.target.value)} className="border p-2 rounded w-full" placeholder="Write your comment here..."></textarea>
  </div>
  <div className="flex justify-between mx-3">
    <div>
      <button type="submit" className="w-full md:w-auto px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button>
    </div>
    <div></div>
  </div>
</div>
</form>  
   
  )
}
