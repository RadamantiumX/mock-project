import { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectModels() {

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };

  return (
    <>
        {/* /////////   DropDown Models ///////// */}
          {/* ////Las imagens se van a mostrar en filas de 4 (4 arriba y 4 abajo)//// */}
          <div className="dropdown inline-block relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/models" className="subnav rounded inline-flex items-center">
            Modelos
            <svg className="fill-current h-4 w-4 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </Link>
          <div className={`dropdown-menu absolute ${isOpen ? '' : 'hidden'} text-gray-700 pt-1`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ zIndex: 100, width: '600px', maxHeight: '600px', overflowY: 'auto' }}>
            <div className="bg-gray-900 p-4">
              <div className="grid grid-cols-4 gap-4">
                {/* fila de imágenes */}
                <div className="rounded-lg overflow-hidden">
                  <div className="wrapper antialiased text-gray-900">
                    <div style={{ width: '150%', height: '100%' }}>
                      <img src="https://source.unsplash.com/random/400x400" alt="imagen aleatoria" className="w-full h-full object-cover object-center rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>

                {/*fin fila imagenes */}
              </div>
              {/* Botón de "Ver más modelos" */}
              <div className="text-center mt-4 mb-2">
                <Link to="/models" className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                <i className="fa-regular fa-star"></i> More Models
                </Link>
              </div>
            </div>
          </div>
        </div>
         {/* fin dropdownModels /////////////////////////////// */}

         </>
  )
}
