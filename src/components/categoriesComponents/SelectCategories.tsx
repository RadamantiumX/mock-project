import { Link } from "react-router-dom";
import "./selectCategories.scss"
import { CATEGORIES } from "../const/categories";
import { useDropDownCategories } from "../../customsHooks/categoriesHooks";
import { FormattedMessage } from "react-intl";
import { Labels } from "../icons/Labels";

export default function SelectCategories() {
  const { isOpen, handleMouseEnter, handleMouseLeave } = useDropDownCategories()
 
  return (
    <>
 {/* /////////   DropDown Categories ///////// */}
<div className="relative inline-block dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <Link to="/categories-list" className="inline-flex items-center rounded subnav">
  <div className="mr-1">
   <Labels/>
  </div>
    <FormattedMessage id="nav.categories" defaultMessage='Categories'/>
    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
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
