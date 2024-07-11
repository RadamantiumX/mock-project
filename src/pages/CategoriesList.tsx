
import { AllCategories } from "../components/categoriesListComponents/AllCategories"
import { PageHeader } from "../components/commonComponents/PageHeader"

export default function CategoriesList() {
  return (
    <main>
      <PageHeader title={"Popular Categories"}/>
      <AllCategories/>
    </main>
  )
}
