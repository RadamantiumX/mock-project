/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Logo from "../../assets/project/logo.png";
import { QueryForm } from "./QueryForm";
import "./navbar.scss";
import { SelectModels } from "../modelsComponents/SelectModels";
import SelectCategories from "../categoriesComponents/SelectCategories";
import { OrderVideosButton} from "../commonComponents/OrderVideosButton";
import { UserButton } from "../commonComponents/UserButton";
import { User } from "../icons/User";
import { Hamburguer } from "../icons/Hamburguer";
import { Selection } from "./Selection";
import { useToogleButton, useLogout } from "../../customsHooks/customsHooks";


export default function NavBar() {
  const { isOpen, toggleDropdown } = useToogleButton(()=>{})
  const { token, nickname, logout } = useLogout()
 
  return (
    <>
      <nav className="relative">
        <header className="md:flex md:items-center md:justify-around p-4 pb-0 md:pb-4">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <Link reloadDocument className="-mt-3" style={{ width: "16rem" }} to="/">
              <img src={Logo} alt="Logo Vanilla Leak" aria-labelledby="Vanilla Leak Logo" title="This is our Logo, Vanilla Leak"/>
            </Link>
            <div className="md:hidden flex items-center">
              {token ?
                <UserButton onClick={logout} nickname={nickname} /> :
                <Link reloadDocument className="sm:flex text-center text-nav w-20" to="/auth/portal/signin">
                  <User/>
                </Link>
              }
              <button className="mobile-menu-button ml-3" onClick={toggleDropdown}  aria-label="menu">
                <Hamburguer/>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-4 w-full md:mb-0 md:w-1/4 gap-5">
            <QueryForm path={"search"} placeholder={"something"}/>
          </div>
          <div className="flex flex-col sm:flex-row mb-4 w-full md:mb-0 md:w-1/4 gap-5">
            {token ?
              <div className=" hidden sm:flex">
                <UserButton onClick={logout} nickname={nickname} />
              </div> :
              <Link className=" hidden sm:flex text-center text-nav w-20" to="/auth/portal/signin">Sign In</Link>
            }
            <div className="flex-1 hidden sm:flex">
              <Selection />
            </div>
          </div>

          {isOpen && (
           <div className="absolute top-full left-0 w-full bg-black z-50">
              <div className="max-w-6xl mx-auto px-4 pt-4 pb-4">
                <div className="mobile-menu md:hidden">
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/">Home</Link>
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/categories-list">Categories</Link>
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/models?page=1">Models</Link>
                  <Link className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800" to="/photos?tag=all&page=1">Photos</Link>
                  <div className="navresponsive block py-2 px-4 text-sm hover:bg-gray-800">
                    <Selection />
                  </div>
                 <OrderVideosButton/>
             </div>
           </div>
         </div>
         
         
          )}
        </header>
      </nav>
      {!isOpen && (
        <div className="hidden bg-indigo-300 bg-opacity-25 pt-2 pb-2 md:flex mt-2 w-full justify-center md:justify-around">
          <nav>
            <ul className="flex flex-row gap-4 mobile-menu">
              <li><Link reloadDocument className="subnav" to="/">Home</Link></li>
              <SelectCategories />
              <SelectModels />
              <li><Link className="subnav" to="/photos?tag=all&page=1">Photos</Link></li>
              <OrderVideosButton/>
            </ul>
          </nav>
        </div>
      )}

    </>
  )
}



