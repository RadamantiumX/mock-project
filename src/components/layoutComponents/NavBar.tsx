import { Link } from "react-router-dom";
import Logo from "../../assets/project/logo.png";
import { useState } from "react";
import { QueryForm } from "./QueryForm";
import "./navbar.scss";
import { MagnifyingGlass } from "../icons/MagnifyingGlass";
import SelectModels from "../modelsComponents/SelectModels";
import SelectCategories from "../categoriesComponents/SelectCategories";
import { Header } from "../homeComponents/Header";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <div className="absolute top-full left-0 w-full bg-black z-50">
              <div className="max-w-6xl mx-auto px-4 pt-4 pb-4">
                <div className="mobile-menu md:hidden">
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/">Home</Link>
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/categories">Categories</Link>
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/models">Models</Link>
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/photos">Photos</Link>
                  <div className="mt-2">
                  <Header/>
                  </div>
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
              <SelectCategories/>
              <SelectModels/>
              <li><Link className="subnav" to="/photos">Photos</Link></li>
              <Header/>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}



