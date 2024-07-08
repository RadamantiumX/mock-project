import axiosClientAuth from "../../services/axios-client-auth"
import { useStateContext } from "../../contexts/ContextProvider"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
   id: number
}

export const ReponsePostForm:React.FC<Props> = ({id}) => {
  
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
  useEffect(()=>{
  
  },[token, id])
  return (
    <>
    <form className="w-1/2" onSubmit={handleSubmit}>
       <textarea name="response" id="response" className="border p-2 rounded w-full resize-none" value={content} onChange={(e)=>setContent(e.target.value)}></textarea> 
       <button className="w-full md:w-auto px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Reply</button>
    </form>
    </>
  )
}
