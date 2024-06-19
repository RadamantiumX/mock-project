/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '../components/init'
import {CardsModels} from "../components/modelsComponents/CardsModels";
import { SearchModelQuery } from '../components/modelsComponents/SearchModelQuery';
import { useQuery } from '../customsHooks/customsHooks';
import { Pagination } from '../components/commonComponents/Pagination';
import { useRange } from '../customsHooks/customsHooks';
import { useFetchModels } from '../customsHooks/customsHooks';


/*
En este caso, deberiamos utilizar un manejo de estados para que se mantengan los cambios una vez que se actulice la ventana

query === null DEFAULT

Num max page = 379

*/
export default function Models() {
 
 const query:any = useQuery() // Get Query params
 const currentPage = query.get('page') 
 const {models, count} = useFetchModels(parseInt(currentPage))
 const { rangePages } = useRange(1, count)

  return (
	<>
	      <div className="container px-8 mx-auto mt-10 mb-5">
    <SearchModelQuery/>
    <section className="grid justify-center grid-cols-1 mx-auto mt-10 mb-5 w-fit lg:grid-cols-5 md:grid-cols-2 justify-items-center gap-y-20 gap-x-24"> {/* Aumentamos el valor de gap-x */}
    {models?.map((item, key) => (
        <CardsModels key={key} name={item.name} photo={item.photo} views={item.views} url={item.url} />
    ))}
</section>

    <nav className="flex justify-center mt-20 mb-20">
    <div className="flex items-center">
      
      <Pagination  itemsPage={rangePages} currentPage={parseInt(currentPage)} optParam={null}/>
        
    </div>
</nav>

</div>

	</>
  )
}