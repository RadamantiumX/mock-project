import '../components/init'
import {CardsModels} from "../components/modelsComponents/CardsModels";
import SearchModel from "../components/modelsComponents/SearchModel";
import { useEffect, useState } from "react";
import { pornHubData } from '../services/scraping';
import { type Datum } from '../types/phubScrapingData';
import { Paginator } from '../components/commonComponents/Paginator';




export default function Models() {
 const [models, setModels] = useState<Datum[]>([])
 const [count, setCount] = useState<number>(0)
 const [page, setPage] = useState(1)
 const getData = async () => {
		const response = await pornHubData(page) 
		return response
	}
const handlePage = () =>{
	
}


useEffect(()=>{
	getData()
	.then((a)=>{
		setModels(a.models.data)
		setCount(a.count)
	})
},[pornHubData])

  return (
	<>
	<SearchModel/>
    {models?.map((item, key)=>(<CardsModels key={key} name={item.name} photo={item.photo} views={item.views}/>))}
	<Paginator handlePage={handlePage} length={count} postPerPage={models.length} />
	</>
  )
}
