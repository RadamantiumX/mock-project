import { useState } from "react";
import { Link } from "react-router-dom";
import "./selectCategories.scss"
import { CATEGORIES } from "../const/categories";

export default function SelectCategories() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
 {/* /////////   DropDown Categories ///////// */}
<div className="dropdown inline-block relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <Link to="/categories" className="subnav rounded inline-flex items-center">
    Categories
    <svg className="fill-current h-4 w-4 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  </Link>
  <div className={`dropdown-menu absolute ${isOpen ? '' : 'hidden'} text-gray-700 pt-1`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ zIndex: 100, width: '1000px', maxHeight: '1000px', overflowY: 'auto', top: '100%', left: '50%', transform: 'translate(-50%, 0)' }}>
    <div className="bg-black bg-opacity-95 p-5">
    <div className="grid grid-cols-6 gap-4">
  {/* Lista de palabras "lorem" */}
  {CATEGORIES.map((cat, index) => (
    <Link to={`/categories/${cat}`} className=" text-categories cursor-pointer" key={index}>{cat}</Link>
  ))}
  {/* Fin de la lista de palabras "lorem" */}
</div>

    
    </div>
  </div>
</div>
{/* fin dropdownModels /////////////////////////////// */}




         </>
  )
}
