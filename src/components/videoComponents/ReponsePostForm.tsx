import axiosClientAuth from "../../services/axios-client-auth"
import { useStateContext } from "../../contexts/ContextProvider"
import { useState, useEffect } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { getReplysSource } from "../../redux/replySources/replysSlice"

interface Props {
   id: number
}

export const ReponsePostForm:React.FC<Props> = ({id}) => {
  const { token, setNotification } = useStateContext()
  const [content, setContent] = useState('')
  const dispatch = useAppDispatch()
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     const payload = {
        token: token,
        content: content,
        postId: id,
        response: true
     }

     await axiosClientAuth.post('/post/newpost',payload)
     .then(({data})=>{
       setNotification(data.message)
       setContent('')// <--- reset form
      dispatch(getReplysSource())
     })
     .catch( err => {
       const res = err.response
       console.log(res)
     })
  }
  useEffect(()=>{
    
  },[token])
  return (
    <>
    <form className="w-1/2" onSubmit={handleSubmit}>
       <textarea name="response" id="response" className="border p-2 rounded w-full resize-none" value={content} onChange={(e)=>setContent(e.target.value)}></textarea> 
       <button className="w-full md:w-auto px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Reply</button>
    </form>
    </>
  )
}
