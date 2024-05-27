/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import { Dots } from "../icons/Dots"


interface Props {
    postPerPage: number,
    length: number,
    handlePagination: any,
    route: string,
    current: number
}

export const Paginator:React.FC<Props> = ({ postPerPage, length, handlePagination, route, current }) => {
    let paginationNumber = []
    const start = 1
if (current !== paginationNumber.length){
  
   for (let i = 1; i <= Math.ceil(length / postPerPage); i++){
       console.log(paginationNumber.length)
        paginationNumber.push(i)    
    }
    
    }

   
      for (let i = current; i <= Math.ceil(current/ current) + current + 2 ; i++){
        paginationNumber.push(i)
    }
   
    console.log(paginationNumber[paginationNumber.length - 1])
      
  return (
    <div className="flex flex-row">
       {paginationNumber[0] >= 2 &&<>
        <Link to={`${route}?page=${start}`} onClick={() => handlePagination(start)} className={start === current ? `border rounded-sm mr-2 p-2 bg-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"} >{start}</Link>
        <Dots/>
        </>}

        {paginationNumber.map((pageNumber) => (
           <> <Link to={`${route}?page=${pageNumber}`} onClick={() => handlePagination(pageNumber)} className={pageNumber === current ? `border rounded-sm mr-2 p-2 bg-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"} >{pageNumber}</Link> </>
        ))}
        <Dots/>
        <Link to={`${route}?page=${length}`} onClick={() => handlePagination(length)} className={length === current ? `border rounded-sm mr-2 p-2 bg-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"} >{length}</Link>
    </div>
  )
}
