import { Link } from "react-router-dom";
import Logo from "../../assets/project/dh-logo-preview.png";
import { useState } from "react";
import "./navbar.scss";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* <nav className="relative bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4 items-center">
              <div>
                <Link to="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <img src={Logo} alt="Logo DirtyHub" />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Features</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3">Login</a>
              <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
            </div>
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMenu}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Menú desplegable en dispositivos móviles */}
        {/* {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-100 z-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="mobile-menu md:hidden">
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
              </div>
            </div>
          </div>
        )} */}
      {/* </nav>
      <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in Tailwind!</h2>
      </div> */}


<nav className="relative ">
      <header className=" md:flex md:items-center md:justify-around p-4 pb-0  md:pb-4">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <Link style={{ width: "16rem" }} to="/"><img src={Logo} alt="Logo DirtyHub" /></Link>
          <a className="text-black hover:text-orange md:hidden" href="#">
            <i className="fa fa-2x fa-bars"></i>
          </a>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMenu}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className='mb-4 w-full md:mb-0 md:w-1/4'>
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.." />
          </div>
        </div>
       
            {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 z-50">
            <div className="max-w-6xl mx-auto px-4 pt-4 pb-4">
              <div className="mobile-menu md:hidden">
              <a className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" href="#">Categories</a>
             <a className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" href="#">Stuff</a>
              <a className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" href="#">Locates</a>
              <a className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" href="#">About</a>
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
              <li><a className="subnav" href="#">Categories</a></li>
              <li><a className="subnav" href="#">Stuff</a></li>
              <li><a className="subnav" href="#">Locates</a></li>
              <li><a className="subnav" href="#">About</a></li>
            </ul>
          </nav>
        </div>
      )}


</>
  )
}



