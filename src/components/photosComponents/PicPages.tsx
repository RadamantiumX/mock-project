/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePicsAlbums } from "../../customsHooks/photosHooks"
import { AlbumCard } from "./AlbumCard"
import { Pagination } from "../commonComponents/Pagination"
import { useRange } from "../../customsHooks/customsHooks"


interface Props{
  tag: string | null
  page: string | any
}

export const PicPages:React.FC<Props> = ({tag, page}) => {

  const { pics, pages } = usePicsAlbums(page, tag)
  const { rangePages } = useRange(1, parseInt(pages))

  return (
    <>
    <section className="mt-20">
     <div className="grid grid-flow-row grid-cols-4">
        {pics?.map((item)=>(<AlbumCard  title={item.title} preview={item.preview}/>))}
     </div>
     <Pagination itemsPage={rangePages} currentPage={parseInt(page)} optParam={`tag=${tag}`}/>
    </section>
    </>
  )
}
