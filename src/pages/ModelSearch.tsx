// import { CardsModels } from "../components/modelsComponents/CardsModels"
import { SearchModelQuery } from "../components/modelsComponents/SearchModelQuery"
import { useQuery } from "../customsHooks/customsHooks"
import { useEffect, useState } from "react"
import axiosClientAuth from "../services/axios-client-auth"
import { type Datum } from "../types/phubScrapingData"
import { CardsModels } from "../components/modelsComponents/CardsModels"

export default function ModelSearch() {
  const [models, setModels] = useState<Datum[]>([])
  const query = useQuery()
  const searchModel = query.get("query")
  useEffect(()=>{
  axiosClientAuth(`phub/models-filter/${searchModel}`)
   .then(({data})=>{
    console.log(data.models)
    setModels(data.models)
   })
   .catch(err =>{
    console.log(err)
   })
  },[searchModel])
  return (
    <div className="container mx-auto mt-10 mb-5 px-8">
        <SearchModelQuery/>
        <h1>Results for <span className="text-red-600">{searchModel}</span></h1>
        <section className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-10 gap-x-4 mt-10 mb-5">
        {models !== undefined ? models?.map((item, key) => (
            <CardsModels key={key} name={item.name} photo={item.photo} views={item.views} url={item.url} />
        )) : <div>No results found</div>}
       </section>
    </div>
  )
}


