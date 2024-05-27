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
    let paginationNumberInitial = []
    const paginationNumberEnding = []
    const start = 1
if (current !== paginationNumberInitial.length){
   for (let i = current; i <= Math.ceil(length / postPerPage) + current * 2; i++){
        paginationNumberInitial.push(i)   
        if (current > 8){
        paginationNumberInitial = []
        paginationNumberInitial.push(current) 
        }        
    }
    }
   
    for (let i = (length - 4); i < length; i++){
      paginationNumberEnding.push(i)
    }
      
  return (
    <div className="flex flex-row">
       {paginationNumberInitial[0] >= 2 &&<>
        <Link to={`${route}?page=${start}`} onClick={() => handlePagination(start)} className={start === current ? `border rounded-sm mr-2 p-2 bg-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"} >{start}</Link>
        {current < 375 && <Dots/>}
        </>}
         {current < 374 ? paginationNumberInitial.map((pageNumber) => (
           <> <Link to={`${route}?page=${pageNumber}`} onClick={() => handlePagination(pageNumber)} className={pageNumber === current ? `border rounded-sm mr-2 p-2 bg-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"} >{pageNumber}</Link> </>
        )): <></>}
        <Dots/>

        {paginationNumberEnding.map((pageNumber)=>(
          <Link to={`${route}?page=${pageNumber}`} onClick={() => handlePagination(pageNumber)} className={pageNumber === current ? `border rounded-sm mr-2 p-2 bg-yellow-600 pointer-events-none` : "border rounded-sm mr-2 p-2 pointer-events-auto"} >{pageNumber}</Link>
        ))}
        
    </div>
  )
}
