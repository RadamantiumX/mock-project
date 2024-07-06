import { Link } from "react-router-dom";
import "./selectCategories.scss"
import { CATEGORIES } from "../const/categories";
import { useDropDownCategories } from "../../customsHooks/categoriesHooks";

export default function SelectCategories() {
  const { isOpen, handleMouseEnter, handleMouseLeave } = useDropDownCategories()
 
  return (
    <>
 {/* /////////   DropDown Categories ///////// */}
<div className="relative inline-block dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <Link to="/categories-list" className="inline-flex items-center rounded subnav">
    Categories
    <svg className="w-4 h-4 mt-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  </Link>
  <div className={`dropdown-menu absolute ${isOpen ? '' : 'hidden'} text-gray-700 pt-1`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ zIndex: 100, width: '1000px', maxHeight: '1000px', overflowY: 'auto', top: '100%', left: '50%', transform: 'translate(-50%, 0)' }}>
    <div className="p-5 bg-black bg-opacity-95">
    <div className="grid grid-cols-6 gap-4">
  {CATEGORIES.map((cat, index) => (
  <Link 
    to={`/categories/${cat.tag}`} 
    className="curs-1r-pointer text-categories" 
    key={index}
  >
    {cat.tag === "Double Penetration" ? "Double ..." : cat.tag}
  </Link>
))}

</div>
    </div>
  </div>
</div>
{/* fin dropdownModels /////////////////////////////// */}




         </>
  )
}
