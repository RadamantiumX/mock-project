import { VideosResults } from "../components/searchComponents/VideosResults"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { NotResults } from "../components/commonComponents/NotResults"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getSource } from "../redux/sourceSlice"
import { LoadButton } from "../components/commonComponents/LoadButton"

type Params = {
  query: string
}
export default function Search() {
  const [counter, setCounter] = useState<number>(7)
  const { query } = useParams<Params>()
  
  const dispatch = useAppDispatch()
  const source = useAppSelector(state => state.source.data)

  const handleResults = () =>{
    setCounter(counter + 7)
  }
  
  useEffect(()=>{ 
    const payload = query?.concat(" ", counter.toString())
    // Prevent EXTRA typing ♻
    if (query !== undefined ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(getSource(payload as any))
    
  }

  },[query, counter]) // ✅Component data is refreshed when "query" is updated

  return (
    <main>
      <h1 className="text-2xl">Results of search for: <span className="font-bold">{query}</span></h1>
      {
      source?.length !== 0 ? <div><VideosResults source={source}/><LoadButton onClick={handleResults} title={'Load more videos...'}/></div>
      : <NotResults/>
      }
    </main>
  )
}
