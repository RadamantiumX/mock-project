/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"

interface Props {
    postPerPage: number,
    length: number,
    handlePagination: any,
    route: string
}

export const Paginator:React.FC<Props> = ({ postPerPage, length, handlePagination, route }) => {
    const paginationNumber = []
    for (let i = 1; i <= Math.ceil(length / postPerPage); i++){
        paginationNumber.push(i)
    }
  return (
    <div>
        {paginationNumber.map((pageNumber) => (
           <> <Link to={`${route}?page=${pageNumber}`} onClick={() => handlePagination(pageNumber)} className="border rounded-sm mr-2 p-2" >{pageNumber}</Link> </>
        ))}
    </div>
  )
}
