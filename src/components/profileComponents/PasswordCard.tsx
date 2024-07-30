import { useState } from 'react';
import { AlertSignal } from "../commonComponents/AlertSignal";
import { useUpdateUserPassword } from "../../customsHooks/profileHooks";
import { FormattedMessage } from "react-intl";
import { EyeOn } from '../icons/EyeOn';
import { EyeOff } from '../icons/EyeOff';

export const PasswordCard = () => {
  const { oldPassword, setOldPassword, password, setPassword, confirmPassword, setConfirmPassword, handleSubmit, error, setError } = useUpdateUserPassword();
  
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <hr className="mt-4 mb-8" />
      <p className="py-2 text-xl font-semibold"><FormattedMessage id="profile.passwordcard.title" defaultMessage="Update Password" /></p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
        {error.length !== 0 && <AlertSignal setError={setError} message={error} />}
        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <label htmlFor="old-password" className="relative">
            <span className="text-sm text-gray-500"><FormattedMessage id="profile.passwordcard.label#1" defaultMessage="Old Password" /></span>
            <div className="relative flex overflow-hidden transition border-2 rounded-md focus-within:border-blue-600">
              <input
                type={showOldPassword ? 'text' : 'password'}
                id="old-password"
                name="old-password"
                className="flex-shrink w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-gray-300 appearance-none focus:outline-none"
                placeholder="***********"
                value={oldPassword}
                onChange={(e) => { setOldPassword(e.target.value); }}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? (
                  <EyeOn/>
                ) : (
                 <EyeOff/>
                )}
              </button>
            </div>
          </label>
          <div className="flex flex-col sm:flex-row sm:space-x-3">
            <label htmlFor="new-password" className="relative">
              <span className="text-sm text-gray-500"><FormattedMessage id="profile.passwordcard.label#2" defaultMessage="New Password" /></span>
              <div className="relative flex overflow-hidden transition border-2 rounded-md focus-within:border-blue-600">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="new-password"
                  name="new-password"
                  className="flex-shrink w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-gray-300 appearance-none focus:outline-none"
                  placeholder="***********"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                   <EyeOn/>
                  ) : (
                   <EyeOff/>
                  )}
                </button>
              </div>
            </label>
            <label htmlFor="retype-password" className="relative">
              <span className="text-sm text-gray-500"><FormattedMessage id="profile.passwordcard.label#3" defaultMessage="Retype new Password" /></span>
              <div className="relative flex overflow-hidden transition border-2 rounded-md focus-within:border-blue-600">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="retype-password"
                  name="retype"
                  className="flex-shrink w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-gray-300 appearance-none focus:outline-none"
                  placeholder="***********"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                   <EyeOn/>
                  ) : (
                   <EyeOff/>
                  )}
                 
                </button>
              </div>
            </label>
          </div>
        </form>
      </div>
      <button className="px-4 py-2 mt-4 text-white bg-pink-600 rounded-lg hover:bg-pink-700">
  <FormattedMessage id="profile.passwordcard.button" defaultMessage="Update" />
</button>

    </>
  );
};
