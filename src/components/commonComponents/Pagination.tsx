import { usePagination } from "../../customsHooks/customsHooks"
import { Link } from "react-router-dom"
import { Next } from "../icons/Next"
import { Prev } from "../icons/Prev"

interface Props{
    itemsPage: number[]
    currentPage: number,
    optParam: string | null
}

export const Pagination:React.FC<Props> = ({ itemsPage, currentPage, optParam }) => {
  const range = 6 
  const { rangePage } = usePagination(itemsPage, currentPage, range) // Pagination Hook (Array, number, number)
 
  return (
    <>
    <nav className="flex flex-row gap-y-2">
      {currentPage!== 1&& <Link to={`?page=${currentPage - 1}`} reloadDocument title="Previus Page"><Prev/></Link> }

      {/** First Page */} 
      {rangePage[0] !== 1 && <Link reloadDocument to={optParam ? `?tag=${optParam}&page=${itemsPage[0]}`:`?page=${itemsPage[0]}`} title={`Go to page ${itemsPage[0]}`} className={itemsPage[0] === currentPage ? `border rounded-sm mr-2 p-2 bg-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"}>{itemsPage[0]}</Link>}
      
      {/** All pages mapped */}
      {rangePage.map((item, key)=>(<Link reloadDocument to={optParam ? `?tag=${optParam}&page=${item}`:`?page=${item}`} title={`Go to page ${item}`} key={key} className={item === currentPage ? `border rounded-sm mr-2 p-2 bg-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"}>{item}</Link>))}

      {/** Last page */}
      {rangePage[rangePage.length -1] !== itemsPage.length &&<Link reloadDocument to={optParam ? `?tag=${optParam}&page=${itemsPage[itemsPage.length - 1]}`: `?page=${itemsPage[itemsPage.length - 1]}`} title={`Go to page ${itemsPage[itemsPage.length - 1]}`} className={itemsPage[itemsPage.length - 1] === currentPage ? `border rounded-sm mr-2 p-2 bg-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"}>{itemsPage[itemsPage.length - 1]}</Link>}
      
      {currentPage !== itemsPage[itemsPage.length -1] &&<Link to={optParam ? `?tag=${optParam}&page=${currentPage + 1}`:`?page=${currentPage + 1}`} reloadDocument title="Next page"><Next/></Link>}
    </nav>
    </>
  )
}
