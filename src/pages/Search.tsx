import { VideosResults } from "../components/searchComponents/VideosResults"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { NotResults } from "../components/commonComponents/NotResults"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getEpornerSource } from "../redux/epornerSources/sourceSlice"
import { LoadButton } from "../components/commonComponents/LoadButton"

type Params = {
  query: string
}
export default function Search() {
  const [counter, setCounter] = useState<number>(7)
  const { query } = useParams<Params>()
  const replaceSpace = query?.replace(/ /gi, "") // Replace white spaces to unify the string 
  
  const dispatch = useAppDispatch()
  const eporner = useAppSelector(state => state.source.data)

  const handleResults = () =>{
    setCounter(counter + 7)
  }
  
  useEffect(()=>{ 
    const payload = replaceSpace?.concat(" ", counter.toString())
    // Prevent EXTRA typing ♻
    if (query !== undefined ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(getEpornerSource(payload as any))
    
  }

  },[query, counter]) // ✅Component data is refreshed when "query" is updated

  return (
    <main>
     <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl text-center sm:text-left ml-5 mt-9">Results of search for: <span className="font-bold text-pink-600">{query}</span></h1>
      {
        eporner?.length !== 0 ? 
        <div className="mt-8">
          <VideosResults source={eporner} />
          <LoadButton onClick={handleResults} title={'Load more videos...'} />
        </div>
        : <NotResults />
      }
    </main>
  )
}
