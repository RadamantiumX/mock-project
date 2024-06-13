import { PageHeader } from "../components/commonComponents/PageHeader"
import { PopularTags } from "../components/photosComponents/PopularTags"


export default function Photos() {
   

  return (
    <main>
      <PageHeader title="Most Popular Tags"/>
      <PopularTags/>
    </main>
  )
}
