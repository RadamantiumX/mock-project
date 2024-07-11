import { useNewResponse } from "../../customsHooks/videoHooks"

interface Props {
   id: number
}

export const ReponsePostForm:React.FC<Props> = ({id}) => {
  const { handleSubmit, content, setContent } = useNewResponse(id)
 
  return (
    <>
    <form className="w-1/2" onSubmit={handleSubmit}>
       <textarea name="response" id="response" className="border p-2 rounded w-full resize-none" value={content} onChange={(e)=>setContent(e.target.value)}></textarea> 
       <button className="w-full md:w-auto px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Reply</button>
    </form>
    </>
  )
}
