import { usePagination } from "../../customsHooks/customsHooks"
import { Link } from "react-router-dom"
import { Next } from "../icons/Next"
import { Prev } from "../icons/Prev"

interface Props{
    itemsPage: number[]
    currentPage: number
}

export const Pagination:React.FC<Props> = ({ itemsPage, currentPage, route }) => {
  
  const { rangePage } = usePagination(itemsPage, currentPage, 6)
 

  return (
    <>
    <nav className="flex flex-row gap-y-2">
      {currentPage!== 1&& <Link to={`?page=${currentPage - 1}`} reloadDocument><Prev/></Link> }
      {rangePage[0] !== 1 && <button className="border-yellow-600 rounded-md bg-slate-100 p-2 ml-2">{itemsPage[0]}</button>}
      {rangePage.map((item, key)=>(<button key={key} className="border-yellow-600 rounded-md bg-slate-100 p-2 ml-2">{item}</button>))}
      {rangePage[rangePage.length -1] !== itemsPage.length &&<button className="border-yellow-600 rounded-md bg-slate-100 p-2 ml-2">{itemsPage[itemsPage.length - 1]}</button>}
      {currentPage !== itemsPage[itemsPage.length -1] &&<Link to={`?page=${currentPage + 1}`} reloadDocument><Next/></Link>}
    </nav>
    </>
  )
}
