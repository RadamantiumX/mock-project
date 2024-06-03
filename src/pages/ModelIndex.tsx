import { getModelVideos } from "../services/resources"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ModelIndex() {
 const { name } = useParams<string>() 



useEffect(()=>{
  getModelVideos()
   .then((data)=>{
    console.log(data)
   })
},[name])
  return (
    <main>
        <h1>Model Name</h1>
    </main>
  )
}

