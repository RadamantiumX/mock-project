import { PageHeader } from "../components/commonComponents/PageHeader"
import { PopularTags } from "../components/photosComponents/PopularTags"
import { useQuery } from "../customsHooks/customsHooks"
import { PicPages } from "../components/photosComponents/PicPages"

export default function Photos() {
  const query = useQuery()
  const tag = query.get('tag') 

  return (
    <main>
      <PageHeader title="Most Popular Tags"/>
      <PopularTags tag={tag}/>
      <PicPages tag={tag}/>
    </main>
  )
}
