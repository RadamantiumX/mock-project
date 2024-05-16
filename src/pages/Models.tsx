import '../components/init'
import CardsModels from "../components/modelsComponents/CardsModels";
import SearchModel from "../components/modelsComponents/SearchModel";
import { phubApi } from "../services/pornhub-api";
import { useEffect } from "react";



export default function Models() {
useEffect(()=>{
	const response = phubApi()

	console.log(response)
},[])

  return (
	<>
	<SearchModel/>
    <CardsModels/>
	</>
  )
}
