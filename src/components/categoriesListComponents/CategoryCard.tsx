import { Link } from "react-router-dom"

interface Props{
   image: string
   category: string
}

export const CategoryCard:React.FC<Props> = ({image, category}) => {
  return (
    <Link to={`/categories/${category}`}>
      <div className="flex flex-col">
        <img className="h-20 w-auto" src={image} alt={`image for ${category} sex porn`} title={`This is the ${category} image`}/>
        <h3>{category}</h3>
        </div>
    </Link>
  )
}
