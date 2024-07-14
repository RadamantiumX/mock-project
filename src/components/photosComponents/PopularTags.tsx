import { TAGS } from "../const/tags"
import { Delete } from "../icons/Delete"
import { TagCard } from "./TagCard"
import { useState } from "react"

interface Props {
  tag: string | null
}

export const PopularTags: React.FC<Props> = ({ tag }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(tag || 'Seleccione una etiqueta');

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    setIsOpen(false);
  }

  return (
    <>
      <div className="relative md:hidden">
        <div className="flex items-center h-10 bg-black border border-gray-200 rounded w-100">
          <input 
            value={selectedTag} 
            name="select" 
            id="select" 
            className="w-full px-4 text-white bg-black outline-none appearance-none cursor-pointer" 
            readOnly 
            onClick={() => setIsOpen(!isOpen)}
          />

          <button 
            className="text-gray-300 transition-all outline-none cursor-pointer focus:outline-none hover:text-gray-600"
            onClick={() => setSelectedTag('')}
          >
           <Delete/>
          </button>
        </div>

        {isOpen && (
          <div className="absolute z-10 flex flex-col w-full mt-1 overflow-hidden bg-black border border-gray-200 rounded shadow">
            {TAGS.map((item) => (
              <div 
                key={item.tag} 
                className="border-gray-700 cursor-pointer group"
                onClick={() => handleSelectTag(item.tag)}
              >
                <a className="block p-2 text-white border-l-4 border-transparent group-hover:bg-gray-700">
                  <TagCard tag={item.tag} fill={tag === item.tag.toLocaleLowerCase() ? "pink-600" : ""} />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:block">
        {TAGS.map((item) => (
          <div key={item.tag} className="p-2">
            <TagCard tag={item.tag} fill={tag === item.tag.toLocaleLowerCase() ? "pink-600" : ""} />
          </div>
        ))}
      </div>
    </>
  )
}
