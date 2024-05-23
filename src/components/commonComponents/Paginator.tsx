interface Props {
    postPerPage: number,
    length: number
}

export const Paginator:React.FC<Props> = ({ postPerPage, length }) => {
    const paginationNumber = []
    for (let i = 1; i <= Math.ceil(length / postPerPage); i++){
        paginationNumber.push(i)
    }
  return (
    <div>
        {paginationNumber.map((pageNumber) => (
            <button key={pageNumber}>{pageNumber}</button>
        ))}
    </div>
  )
}
