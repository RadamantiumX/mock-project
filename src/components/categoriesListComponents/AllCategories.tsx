import { CATEGORIES } from "../const/categories"
import { CategoryCard } from "./CategoryCard"
export const AllCategories = () => {
  return (
     <section>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {CATEGORIES.map((item)=>(
            <CategoryCard image={item.image} category={item.tag}/>
        ))}
      </div>
     </section>
  )
}
