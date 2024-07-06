import { useParams } from "react-router-dom"
import { ModelCardIndex } from "../components/modelIndexComponents/ModelCardIndex"
import { ModelVideosRelated } from "../components/modelIndexComponents/ModelVideosRelated"

import { useFetchModelVideos, useFetchModelInfo } from "../customsHooks/modelIndexHooks"

export default function ModelIndex() {
 const { name } = useParams<string>() 
 const {model} = useFetchModelInfo(name)
 const {modelVideos} = useFetchModelVideos(name)
  return (
    <main>
      <section>
        <ModelCardIndex name={model?.name} cover={model?.cover} about={model?.about} avatar={model?.avatar} height={model?.height} weight={model?.weight} gender={model?.gender}/> 
        <ModelVideosRelated source={modelVideos}/>
      </section>
       
    </main>
  )
}

