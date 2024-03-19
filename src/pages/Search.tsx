import { VideosResults } from "../components/searchComponents/VideosResults"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { NotResults } from "../components/commonComponents/NotResults"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getSource } from "../redux/sourceSlice"

type Params = {
  query: string
}
export default function Search() {
  const { query } = useParams<Params>()

  const dispatch = useAppDispatch()
  const source = useAppSelector(state => state.source.data)

  useEffect(()=>{
    // Prevent EXTRA typing ♻
    if (query !== undefined) {
    dispatch(getSource(query))
  }
  },[])

  return (
    <main>
      <h1 className="text-2xl">Results of search for: <span className="font-bold">{query}</span></h1>
      {
      source?.length !== 0 ? <VideosResults source={source}/>
      : <NotResults/>
      }
    </main>
  )
}
