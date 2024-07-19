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
import { FormattedMessage } from "react-intl";

export default function NavBar() {
  const { isOpen, toggleDropdown } = useToogleButton(()=>{})
  const { token, nickname, logout } = useLogout()

  return (
    <>
      <nav className="relative">
        <header className="p-4 pb-0 md:flex md:items-center md:justify-around md:pb-4">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <Link reloadDocument className="-mt-3" style={{ width: "16rem" }} to="/">
              <img src={Logo} alt="Logo Vanilla Leak" aria-labelledby="Vanilla Leak Logo" title="This is our Logo, Vanilla Leak"/>
            </Link>
            <div className="flex items-center md:hidden">
              {token ?
                <UserButton onClick={logout} nickname={nickname} /> :
                <Link reloadDocument className="w-20 text-center sm:flex text-nav" to="/auth/portal/signin">
                  <User/>
                </Link>
              }
              <button className="ml-3 mobile-menu-button" onClick={toggleDropdown}  aria-label="menu">
                <Hamburguer/>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 mb-4 sm:flex-row md:mb-0 md:w-2/5">
            <QueryForm path={"search"} placeholder={"something"}/>
          </div>
          <div className="flex flex-col w-full mb-2 sm:flex-row md:mb-0 md:w-1/6">
            <div className="hidden mr-8 sm:flex">
              <Selection />
            </div>
            {token ?
              <div className="hidden sm:flex">
                <UserButton onClick={logout} nickname={nickname} />
              </div> :
              <Link to="/auth/portal/signin" className="relative hidden px-4 py-2 font-medium group md:block">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white"><FormattedMessage id="nav.auth.button" defaultMessage='Sign In' /></span>
              </Link>
            }
          </div>

          {isOpen && (
           <div className="absolute left-0 z-50 w-full bg-black top-full">
              <div className="max-w-6xl px-4 pt-4 pb-4 mx-auto">
                <div className="mobile-menu md:hidden">
                  <Link className="block px-4 py-2 text-sm navresponsive hover:bg-gray-800" to="/"><FormattedMessage id="nav.home" defaultMessage="Home"/></Link>
                  <Link className="block px-4 py-2 text-sm navresponsive hover:bg-gray-800" to="/categories-list"><FormattedMessage id="nav.categories" defaultMessage="Categories"/></Link>
                  <Link className="block px-4 py-2 text-sm navresponsive hover:bg-gray-800" to="/models?page=1"><FormattedMessage id="nav.models" defaultMessage="Models"/></Link>
                  <Link className="block px-4 py-2 text-sm navresponsive hover:bg-gray-800" to="/photos?tag=all&page=1"><FormattedMessage id="nav.photos" defaultMessage="Photos"/></Link>
                  <div className="block px-4 py-2 text-sm navresponsive hover:bg-gray-800">
                    <Selection />
                  </div>
                  <Link to="/videos" className="block px-4 py-2 text-sm navresponsive hover:bg-gray-800"><FormattedMessage id="nav.videos" defaultMessage="Videos"/></Link>
             </div>
           </div>
         </div>
         
         
          )}
        </header>
      </nav>
      {!isOpen && (
        <div className="justify-start hidden w-full pt-1 pb-1 mt-2 md:flex md:justify-center">
          <nav>
            <ul className="flex flex-row gap-4 mobile-menu">
              <li><Link reloadDocument className="subnav" to="/"><FormattedMessage  id="nav.home" defaultMessage="Home"/></Link></li>
              <SelectCategories />
              <SelectModels />
              <li><Link className="subnav" to="/photos?tag=all&page=1"><FormattedMessage id="nav.photos" defaultMessage="Photos"/></Link></li>
              <OrderVideosButton/>
            </ul>
          </nav>
        </div>
      )}

    </>
  )
}



