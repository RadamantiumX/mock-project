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
  <nav className="flex justify-center mb-4 space-x-4" aria-label="Pagination">
    {currentPage !== 1 && (
        <Link
            to={optParam ? `?${optParam}&page=${currentPage - 1}` : `?page=${currentPage - 1}`}
            reloadDocument
            title="Previous Page"
            className="px-2 py-2 text-white border border-white rounded-lg"
        >
            <span className="sr-only">Previous</span>
            <svg
                className="w-5 h-5 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                ></path>
            </svg>
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

    {rangePage[rangePage.length - 1] !== itemsPage.length && (
        <Link
            reloadDocument
            to={optParam ? `?${optParam}&page=${itemsPage[itemsPage.length - 1]}` : `?page=${itemsPage[itemsPage.length - 1]}`}
            title={`Go to page ${itemsPage[itemsPage.length - 1]}`}
            className={`rounded-lg border border-white px-4 py-2 ${
                itemsPage[itemsPage.length - 1] === currentPage ? 'bg-pink-600 text-white' : 'text-white'
            }`}
        >
            {itemsPage[itemsPage.length - 1]}
        </Link>
    )}

    {currentPage !== itemsPage[itemsPage.length - 1] && (
        <Link
            to={optParam ? `?${optParam}&page=${currentPage + 1}` : `?page=${currentPage + 1}`}
            reloadDocument
            title="Next Page"
            className="px-2 py-2 text-white border border-white rounded-lg"
        >
            <span className="sr-only">Next</span>
            <svg
                className="w-5 h-5 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </Link>
    )}
</nav>
    </>
  )
}
