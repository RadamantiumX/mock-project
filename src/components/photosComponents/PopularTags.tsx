import { TAGS } from "../const/tags"
import { TagCard } from "./TagCard"

interface Props{
  tag: string | null
}

export const PopularTags:React.FC<Props> = ({tag}) => {
    
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
