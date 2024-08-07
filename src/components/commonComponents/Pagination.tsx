import { usePagination } from "../../customsHooks/customsHooks"
import { Link } from "react-router-dom"
import { Next } from "../icons/Next"
import { Prev } from "../icons/Prev"
import { Dots } from "../icons/Dots"
import { FormattedMessage } from "react-intl"


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
  <nav className="flex justify-center mb-4 space-x-4" aria-label="Pagination">
    {currentPage !== 1 && (
        <Link
            to={optParam ? `?${optParam}&page=${currentPage - 1}` : `?page=${currentPage - 1}`}
            reloadDocument
            title="Previous Page"
            className="px-2 py-2 text-white border border-white rounded-lg"
        >
            <span className="sr-only"><FormattedMessage id="common.pagination.link#1" defaultMessage="Previous"/></span>
           <Prev/>
        </Link>
    )}

    {rangePage[0] !== 1 && (
        <Link
            reloadDocument
            to={optParam ? `?${optParam}&page=${itemsPage[0]}` : `?page=${itemsPage[0]}`}
            title={`Go to page ${itemsPage[0]}`}
            className={`rounded-lg border border-white px-4 py-2 ${
                itemsPage[0] === currentPage ? 'bg-pink-600 text-white' : 'text-white'
            }`}
        >
            {itemsPage[0]}
        </Link>
    )}
     {currentPage >= 3 && <Dots/>}
    {rangePage.map((item, key) => (
        <Link
            reloadDocument
            to={optParam ? `?${optParam}&page=${item}` : `?page=${item}`}
            title={`Go to page ${item}`}
            key={key}
            className={`rounded-lg border border-white px-4 py-2 ${
                item === currentPage ? 'bg-pink-600 text-white' : 'text-white'
            }`}
        >
            {item}
        </Link>
    ))}

   

    {currentPage !== itemsPage[itemsPage.length - 1] && (
        <Link
            to={optParam ? `?${optParam}&page=${currentPage + 1}` : `?page=${currentPage + 1}`}
            reloadDocument
            title="Next Page"
            className="px-2 py-2 text-white border border-white rounded-lg"
        >
            <span className="sr-only"><FormattedMessage id="common.pagination.link#1" defaultMessage="Next"/></span>
          <Next/>
        </Link>
    )}
</nav>
    </>
  )
}
