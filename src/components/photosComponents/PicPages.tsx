/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePicsAlbums } from "../../customsHooks/photosHooks"
import { AlbumCard } from "./albumCard"
import { Pagination } from "../commonComponents/Pagination"
import { useRange } from "../../customsHooks/customsHooks"
import { Link } from "react-router-dom"


interface Props{
  tag: string | null
  page: string | any
}

export const PicPages:React.FC<Props> = ({tag, page}) => {

  const { album, pages } = usePicsAlbums(page, tag)
  const { rangePages } = useRange(1, parseInt(pages))

  return (
    <>
    <section className="mt-20">
     <div className="grid grid-flow-row grid-cols-4">
        {album?.map((item, key)=>(<Link key={key} to={`/album/${tag}/${item.url.slice(item.url.lastIndexOf('/') + 1)}`}><AlbumCard  title={item.title} preview={item.preview}/></Link>))}
     </div>
     <Pagination itemsPage={rangePages} currentPage={parseInt(page)} optParam={`tag=${tag}`}/>
    </section>
    </>
  )
}
