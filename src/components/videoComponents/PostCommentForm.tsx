import { MessageCircle } from "../icons/MessageCircle"
import axiosClientAuth from "../../services/axios-client-auth"
import { useState, useEffect } from "react"
import { useStateContext } from "../../contexts/ContextProvider"
import { useAppDispatch } from "../../redux/hooks"
import { getPostsSource } from "../../redux/postSources/postsSlice"
import { useParams } from "react-router-dom"


interface Props{
   title: string
}

export const PostCommentForm:React.FC<Props> = ({title}) => {
  const {id} = useParams()
  const { token, setNotification } = useStateContext()
  const [content, setContent] = useState('')
  const dispatch = useAppDispatch()
   

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
 useEffect(()=>{
  console.log(token)
  console.log(id)
 },[])
  
  return (
    
  <form onSubmit={handleSubmit}>
    
<div id="commentsContainer" className="w-full md:w-1/2 p-2 pt-4 rounded shadow-lg mx-auto sm:ml-4">
  <div className="flex flex-col">
    <div>
      <h2 className="font-semibold flex flex-row gap-1"><MessageCircle/> {title} </h2>
    </div>
    
  </div>

  <div className="mt-3 p-3">
    <textarea id="content" value={content} onChange={(e)=>setContent(e.target.value)} className="border p-2 rounded w-full resize-none" placeholder={`Write your ${title.toLowerCase()} here...`}></textarea>
  </div>
  <div className="flex justify-between mx-3">
    <div>
      <button type="submit" className="w-full md:w-auto px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button>
    </div>
    
  </div>
</div>
</form>  
   
  )
}
