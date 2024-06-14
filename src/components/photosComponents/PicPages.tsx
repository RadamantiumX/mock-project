import axiosClientAuth from "../../services/axios-client-auth"
import { useEffect, useState } from "react"

interface Props{
  tag: string | null
}

export const PicPages:React.FC<Props> = ({tag}) => {
  const [pics, setPics] = useState([])
  useEffect(()=>{
    axiosClientAuth(`/phub/pics/1/${tag}`)
      .then((data)=>{
        console.log(data.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[tag])
  return (
    <>
    </>
  )
}
