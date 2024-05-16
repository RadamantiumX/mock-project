import '../components/init'
import CardsModels from "../components/modelsComponents/CardsModels";
import SearchModel from "../components/modelsComponents/SearchModel";
import { useEffect, useState } from "react";
import axiosClientAuth from '../services/axios-client-auth';



export default function Models() {
 const [models, setModels] = useState([])

useEffect(()=>{
	
},[])

  return (
	<>
	<SearchModel/>
    <CardsModels/>
	</>
  )
}
