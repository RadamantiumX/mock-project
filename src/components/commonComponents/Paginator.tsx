/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import { useEffect } from "react"

interface Props {
    postPerPage: number,
    length: number,
    handlePagination: any,
    route: string,
    current: number
}

export const Paginator:React.FC<Props> = ({ postPerPage, length, handlePagination, route, current }) => {
    const paginationNumber = []
    for (let i = 1; i <= Math.ceil(length / postPerPage); i++){
        paginationNumber.push(i)
    }

  useEffect(()=>{

  },[])  
  return (
    <div>
        {paginationNumber.map((pageNumber) => (
           <> <Link to={`${route}?page=${pageNumber}`} onClick={() => handlePagination(pageNumber)} className={pageNumber === current ? `border rounded-sm mr-2 p-2 text-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"} >{pageNumber}</Link> </>
        ))}
    </div>
  )
}
