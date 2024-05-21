import '../components/init'
import {CardsModels} from "../components/modelsComponents/CardsModels";
import SearchModel from "../components/modelsComponents/SearchModel";
import { useEffect, useState } from "react";
import { pornHub } from '../services/scraping';
import { pornHubData } from '../services/scraping';
import { type Datum } from '../types/phubScrapingData';




export default function Models() {
 const [models, setModels] = useState<Datum[]>([])
 const getData = () => {
		pornHubData.then((a) => {
			console.log(a.models.data)
		})
	}

useEffect(()=>{
	getData()
},[pornHub])

  return (
	<>
	<SearchModel/>
    {models?.map((item, key)=>(<CardsModels name={item.name}/>))}

	{models.map((item, key)=>(<div className='text-gray-200' key={key}>
		{item.name}
	</div>))}
	</>
  )
}
