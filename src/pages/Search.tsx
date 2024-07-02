/* eslint-disable @typescript-eslint/no-explicit-any */
import { VideosResults } from "../components/searchComponents/VideosResults"
import { NotResults } from "../components/commonComponents/NotResults"
import { useSearchVideos, useQuery, useRange } from "../customsHooks/customsHooks"

import { Pagination } from "../components/commonComponents/Pagination"

export default function Search() {
  
  const query = useQuery()
  const search: string | null = query.get("query")
  const currentPage:any = query.get("page")
  const { videosResults, totalPages } = useSearchVideos(search, parseInt(currentPage))
  const { rangePages } = useRange(1, Math.round(totalPages))

  return (
    <main>
     <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl text-center sm:text-left ml-5 mt-9">Results of search for: <span className="font-bold text-pink-600">{search}</span></h1>
      {
        videosResults?.length !== 0 ? 
        <div className="mt-8">
          <VideosResults source={videosResults} />
          <Pagination itemsPage={rangePages} currentPage={currentPage === null ? 1: parseInt(currentPage)} optParam={`query=${search}`}/>
        </div>
        : <NotResults />
      }
    </main>
  )
}
