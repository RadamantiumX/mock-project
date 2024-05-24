/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '../components/init'
import {CardsModels} from "../components/modelsComponents/CardsModels";
import SearchModel from "../components/modelsComponents/SearchModel";
import { useEffect, useState } from "react";
import { pornHubData } from '../services/scraping';
import { type Datum } from '../types/phubScrapingData';
import { Paginator } from '../components/commonComponents/Paginator';
import { useQuery } from '../customsHooks/customsHooks';
import { Next } from '../components/icons/Next';
import { Prev } from '../components/icons/Prev';


/*
En este caso, deberiamos utilizar un manejo de estados para que se mantengan los cambios una vez que se actulice la ventana

*/
export default function Models() {
 const [models, setModels] = useState<Datum[]>([])
 const [count, setCount] = useState<number>(0)
 const [page, setPage] = useState<number>(1)
 const query:any = useQuery() // Get Query params
 console.log(query.get('page'))
 console.log(page)
 


 const getData = async () => {
		const response = await pornHubData(page) 
		return response
	}
const handlePagination = (pageNumber:any) =>{
	setPage(pageNumber)
}



useEffect(()=>{
	getData()
	.then((a)=>{
		setModels(a.models.data)
		setCount(a.count)
	 })

async () =>	 {
	if(await query !== null) {
		const changePage = await query.get('page')
		setPage(parseInt(changePage))
		console.log(page)
		getData()  
	      .then((a)=>{
		    setModels(a.models.data)
		    setCount(a.count)
	      })
		  
	}
}

	
},[pornHubData, setPage, page])



  return (
	<>
	<SearchModel/>
    {models?.map((item, key)=>(<CardsModels key={key} name={item.name} photo={item.photo} views={item.views}/>))}
	<nav className='flex flex-row'><button><Prev/></button><Paginator handlePagination={handlePagination} route={'/models'} length={count} postPerPage={models.length} /> <button><Next/></button></nav>
	</>
  )
}