import { Link } from 'react-router-dom';
import { useToogleButton } from '../../customsHooks/customsHooks';
import { FormattedMessage } from 'react-intl';
// Icons
import { Logout } from "../icons/Logout";
import { Settings } from "../icons/Settings";
import { Hearth } from "../icons/Hearth";

export const UserButton = (props: { onClick: () => void, nickname: string | null, email: string | null }) => {
  const { isOpen, toggleDropdown, handleLogout } = useToogleButton(props.onClick);

  return (
    <div className="relative z-10">
      <button
        id="dropdownUserAvatarButton"
        className="flex text-sm transition-transform duration-150 ease-in-out transform bg-gray-900 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 active:scale-95"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src={`https://ui-avatars.com/api/?name=${props.nickname}&background=0D8ABC&color=fff`}
          alt="User Avatar"
        />
      </button>

      <div
        id="dropdownAvatar"
        className={`absolute right-0 z-10 w-48 mt-2 bg-white border divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-black dark:divide-gray-600 transition transform origin-top-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{props.nickname}</div>
          <div className="font-medium truncate">{props.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUserAvatarButton"
        >
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              to="/user/profile"
            >
              <div className="flex flex-row gap-1">
                <Settings />
                <FormattedMessage
                  id="common.userbtn.btn#2"
                  defaultMessage="Account Settings"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              to="/user/fav"
            >
              <div className="flex flex-row gap-1">
                <Hearth />
                <FormattedMessage
                  id="common.userbtn.btn#3"
                  defaultMessage="Favorites"
                />
              </div>
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <button
            className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={handleLogout}
          >
            <div className="flex flex-row gap-1">
              <Logout />
              <FormattedMessage
                id="common.userbtn.btn#1"
                defaultMessage="Logout"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
