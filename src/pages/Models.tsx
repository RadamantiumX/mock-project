/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '../components/init'
import {CardsModels} from "../components/modelsComponents/CardsModels";
import { SearchModelQuery } from '../components/modelsComponents/SearchModelQuery';
import { useEffect, useState } from "react";
import { type Datum } from '../types/phubScrapingData';
import { Paginator } from '../components/commonComponents/Paginator';
import { useQuery } from '../customsHooks/customsHooks';
import { Next } from '../components/icons/Next';
import { Prev } from '../components/icons/Prev';
import { useAppDispatch } from '../redux/hooks';
import { getModelsSource } from '../redux/modelSource/modelsSlice';
import { Link } from 'react-router-dom';


/*
En este caso, deberiamos utilizar un manejo de estados para que se mantengan los cambios una vez que se actulice la ventana

query === null DEFAULT

Num max page = 379

*/
export default function Models() {
 const [models, setModels] = useState<Datum[]>([])
 const [count, setCount] = useState<number>(0)
 const [page, setPage] = useState<number>(1)

 const dispatch = useAppDispatch()

 const query:any = useQuery() // Get Query params

const handlePagination = (pageNumber:any) =>{
	setPage(pageNumber)
}
console.log(page)

useEffect(()=>{
const changePage = query.get('page')
// Mutate state conditional
if(changePage !== null ){
dispatch(getModelsSource(parseInt(changePage)))
  .unwrap()
  .then((response)=>{
	setModels(response.models.data)
	setCount(response.count)
	setPage(parseInt(changePage))	
  })
}else{
	dispatch(getModelsSource(1))
    .unwrap()
    .then((response)=>{
	    setModels(response.models.data)
	    setCount(response.count)
	    setPage(parseInt(changePage))
	
  })
}
},[setPage, page])

  return (
	<>
	      <div className="container mx-auto mt-10 mb-5 px-8">
    <SearchModelQuery/>
    <section className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-10 gap-x-4 mt-10 mb-5">
        {models?.map((item, key) => (
            <CardsModels key={key} name={item.name} photo={item.photo} views={item.views} url={item.url} />
        ))}
    </section>
    <nav className="flex justify-center mb-20 mt-20">
    <div className="flex items-center">
        <Link className={query.get('page') === '1' ? 'hidden' : 'block'} to={`/models?page=${parseInt(query.get('page')) - 1}`} onClick={handlePagination}>
            <Prev />
        </Link>
        <Paginator current={query.get('page') !== null ? parseInt(query.get('page')) : 1} handlePagination={handlePagination} route={'/models'} length={count} postPerPage={models.length} />
        <Link className={query.get('page') === '379' ? 'hidden' : 'block'} to={query.get('page') !== null ? `/models?page=${parseInt(query.get('page')) + 1}` : `/models?page=2`} onClick={handlePagination}>
            <Next />
        </Link>
    </div>
</nav>

</div>

	</>
  )
}