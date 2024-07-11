import { CATEGORIES } from "../const/categories"
import { CategoryCard } from "./CategoryCard"
export const AllCategories = () => {
  return (
     <section>
      <div className="grid justify-center w-full grid-cols-1 gap-4 m-1 mt-12 mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {CATEGORIES.map((item)=>(
            <CategoryCard image={item.image} category={item.tag}/>
        ))}
      </div>
     </section>
  )
}
