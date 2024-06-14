import axiosClientAuth from "../../services/axios-client-auth"
import { useEffect, useState } from "react"
import { type Datum } from "../../types/phubPicsData"
import { AlbumCard } from "./AlbumCard"

interface Props{
  tag: string | null
}

export const PicPages:React.FC<Props> = ({tag}) => {
  const [pics, setPics] = useState<Datum[]>([])
  useEffect(()=>{
    axiosClientAuth(`/phub/pics/1/${tag}`)
      .then((data)=>{
        console.log(data.data.pages)
        setPics(data.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[tag])
  return (
    <>
    <section className="mt-20">
     <div className="grid grid-flow-row grid-cols-4">
        {pics.map((item)=>(<AlbumCard  title={item.title} preview={item.preview}/>))}
     </div>
    </section>
    </>
  )
}
