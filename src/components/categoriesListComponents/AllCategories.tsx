import { CATEGORIES } from "../const/categories"
import { CategoryCard } from "./CategoryCard"
export const AllCategories = () => {
  return (
     <section>
        {CATEGORIES.map((item)=>(
            <CategoryCard image={item.image} category={item.tag}/>
        ))}
     </section>
  )
}
