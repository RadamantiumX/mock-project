/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClientAuth from "../../services/axios-client-auth"
import { useEffect, useState } from "react"
import { type Datum } from "../../types/phubPicsData"
import { AlbumCard } from "./AlbumCard"
import { Pagination } from "../commonComponents/Pagination"
import { useRange } from "../../customsHooks/customsHooks"

interface Props{
  tag: string | null
  page: string | any
}

export const PicPages:React.FC<Props> = ({tag, page}) => {
  const [pics, setPics] = useState<Datum[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pages, setPages] = useState<any>()
  
  const { rangePages } = useRange(1, pages)

  useEffect(()=>{
    console.log(rangePages)
    axiosClientAuth(`/phub/pics/${page}/${tag}`)
      .then((data)=>{
        console.log(data.data.pages)
        setPages(data.data.pages)
        setPics(data.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[tag, pages])
  return (
    <>
    <section className="mt-20">
     <div className="grid grid-flow-row grid-cols-4">
        {pics.map((item)=>(<AlbumCard  title={item.title} preview={item.preview}/>))}
     </div>
     <Pagination itemsPage={rangePages} currentPage={parseInt(page)}/>
    </section>
    </>
  )
}
