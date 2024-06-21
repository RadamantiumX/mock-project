import { VideosResults } from "../components/searchComponents/VideosResults"
import { NotResults } from "../components/commonComponents/NotResults"
import { LoadButton } from "../components/commonComponents/LoadButton"
import { useQuery } from "../customsHooks/customsHooks"
import { useSearchVideos } from "../customsHooks/customsHooks"

export default function Search() {
  
  const query = useQuery()
  const search: string | null = query.get("query")
  const { eporner, handleResults} = useSearchVideos(search)
  

  return (
    <main>
     <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl text-center sm:text-left ml-5 mt-9">Results of search for: <span className="font-bold text-pink-600">{search}</span></h1>
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
