import '../components/init'
import CardsModels from "../components/modelsComponents/CardsModels";
import SearchModel from "../components/modelsComponents/SearchModel";
import { useEffect, useState } from "react";
import { pornHub } from '../services/scraping';




export default function Models() {
 const [models, setModels] = useState([])

useEffect(()=>{
	const source = pornHub()
	console.log(source)
},[pornHub])

  return (
	<>
	<SearchModel/>
    <CardsModels/>
	</>
  )
}
