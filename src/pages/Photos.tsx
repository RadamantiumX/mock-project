import { PageHeader } from "../components/commonComponents/PageHeader"
import { PopularTags } from "../components/photosComponents/PopularTags"
import { useQuery } from "../customsHooks/customsHooks"
import { PicPages } from "../components/photosComponents/PicPages"

export default function Photos() {
  const query = useQuery()
  const tag = query.get('tag')
  const page = query.get('page')

  return (
    <>
      <main className="relative py-10">
  <div className="w-full px-4 mx-auto max-w-8xl md:px-8">
    <div className="grid grid-cols-12">
      <div className="w-full col-span-12 md:col-span-3 max-md:max-w-md max-md:mx-auto max-md:flex max-md:flex-col max-md:items-center">
        <div className="w-full p-3 space-y-2 dark:text-gray-300">
          <PageHeader title="Most Popular Tags" />
          <div className="w-full divide-y dark:divide-gray-300">
            <ul className="pt-4 pb-2 space-y-1 text-sm">
              <li>
                <PopularTags tag={tag} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <PicPages tag={tag} page={page} />
      </div>
    </div>
  </div>
</main>

    </>
  )
}
