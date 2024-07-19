import { Link } from 'react-router-dom';
import { useToogleButton } from '../../customsHooks/customsHooks';
import { FormattedMessage } from 'react-intl';
// Icons
import { Logout } from "../icons/Logout";
import { Settings } from "../icons/Settings";
import { Hearth } from "../icons/Hearth";


export const UserButton = (props: {onClick:()=>void, nickname: string | null}) => {
  const { isOpen, toggleDropdown, handleLogout } = useToogleButton(props.onClick)

  return (
<div className="relative z-10">
  <button className="flex items-center space-x-2" onClick={toggleDropdown}>
    <img className="rounded-full h-8 w-8" src={`https://ui-avatars.com/api/?name=${props.nickname}&background=0D8ABC&color=fff`} alt="User Avatar" title="Avatar for Vanilla Leak User"/>
    <svg className="h-4 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z" clipRule="evenodd"/>
    </svg>
  </button>
  {isOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
      <div className="py-1">
        <button className="block px-2 py-1 text-white hover:bg-gray-800 w-full text-center" onClick={handleLogout}><div className='flex flex-row gap-1'><FormattedMessage id='common.userbtn.btn#1' defaultMessage="Logout"/><Logout/></div></button>
        <Link className="block px-2 py-1 text-white hover:bg-gray-800 w-full text-center" reloadDocument to="/user/profile"><div className='flex flex-row gap-1'><FormattedMessage id='common.userbtn.btn#2' defaultMessage="Account Settings"/><Settings/></div></Link>
        <Link className="block px-2 py-1 text-white hover:bg-gray-800 w-full text-center" reloadDocument to="/user/fav"><div className='flex flex-row gap-1'><FormattedMessage id='common.userbtn.btn#3' defaultMessage="Favorites"/><Hearth/></div></Link>
      </div>
    </div>
  )}
</div>

  );
};



