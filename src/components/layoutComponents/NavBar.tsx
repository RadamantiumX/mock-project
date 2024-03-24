import { Link } from "react-router-dom";
import Logo from "../../assets/project/dh-logo-preview.png";
import { useState } from "react";
import { QueryForm } from "./QueryForm";
import "./navbar.scss";
import { MagnifyingGlass } from "../icons/MagnifyingGlass";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="relative ">
        <header className=" md:flex md:items-center md:justify-around p-4 pb-0  md:pb-4">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <Link style={{ width: "16rem" }} to="/"><img src={Logo} alt="Logo DirtyHub" /></Link>
            <a className="text-black hover:text-orange md:hidden" href="#">
              <i className="fa fa-2x fa-bars"></i>
            </a>
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMenu} aria-label="menu">
                <MagnifyingGlass/>
              </button>
            </div>
          </div>
          <div className='mb-4 w-full md:mb-0 md:w-1/4'>
            <QueryForm />
          </div>
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-gray-900 z-50">
              <div className="max-w-6xl mx-auto px-4 pt-4 pb-4">
                <div className="mobile-menu md:hidden">
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/">Home</Link>
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/categories">Categories</Link>
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/models">Models</Link>
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/photos">Photos</Link>
                </div>
              </div>
            </div>
          )}
        </header>
      </nav>
      {!isMenuOpen && (
        <div className="hidden md:flex mt-2 w-full justify-center md:justify-around">
          <nav>
            <ul className="flex flex-row gap-4 mobile-menu">
              <li><Link className="subnav" to="/">Home</Link></li>
              <li><Link className="subnav" to="/categories">Categories</Link></li>

           {/* /////////   DropDown Models ///////// */}
          {/* ////Las imagens se van a mostrar en filas de 4 (4 arriba y 4 abajo)//// */}
              <div className="dropdown inline-block relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="" className="subnav rounded inline-flex items-center">
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
                      <Link to="/mas-modelos" className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                        More Models
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
               {/* fin dropdownModels /////////////////////////////// */}

              <li><Link className="subnav" to="/photos">Photos</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}



