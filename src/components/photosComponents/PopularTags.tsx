import { TAGS } from "../const/tags"
import { TagCard } from "./TagCard"
import { useQuery } from "../../customsHooks/customsHooks"

export const PopularTags = () => {
  const query = useQuery()
  const tag = query.get('tag')  
  console.log(tag)
  return (
      <>
      <div className="grid grid-rows-2 grid-flow-col gap-1 mt-10">
        {TAGS.map((item)=>(
            <div className="">
                <TagCard tag={item.tag} fill={tag === item.tag.toLocaleLowerCase() ? "pink-600" : ""}/>
            </div>
        ))}
      </div>
      </>
  )
}
