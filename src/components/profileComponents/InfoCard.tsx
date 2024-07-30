import { useShowFields, useUpdateUserInfo } from "../../customsHooks/profileHooks"
import { AlertSignal } from "../commonComponents/AlertSignal"
import { InputForm } from "./InputForm"
import { FormattedMessage } from "react-intl"
import { PasswordCard } from "./PasswordCard"

interface Props {
  nickname: string | undefined
  email: string | undefined
}

export const InfoCard: React.FC<Props> = ({ nickname, email }) => {
  const { showFirst, setShowFirst, showSecond, setShowSecond } = useShowFields()
  const { setField, payload, setPayload, handleSubmit, error, setError } = useUpdateUserInfo()
  return (
    <>
      <div className="max-w-6xl min-h-screen px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 pt-3 md:grid-cols-4 lg:grid-cols-8">
          <div className="hidden col-span-1 md:col-span-1 lg:col-span-2 md:block">
            <ul>
              <li className="px-2 py-2 mt-5 font-semibold text-pink-700 transition border-l-2 cursor-pointer border-l-pink-700 hover:border-l-pink-700 hover:text-pink-700">
                Account
              </li>
            </ul>
          </div>
          <div className="col-span-1 px-4 overflow-hidden md:col-span-3 lg:col-span-6 rounded-xl sm:px-8 sm:shadow">
            <div className="py-2 text-xl font-semibold">
              <FormattedMessage id="profile.infocard.title" defaultMessage="Basic Information" />
            </div>

            <div className="flex flex-col mb-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-600">
                <FormattedMessage id="profile.infocard.emailDescription" defaultMessage="Your email address is" />
                <span className="ml-1"><strong>{email}</strong></span>
              </p>
              {!showSecond && (
                <button className="inline-flex mt-4 text-sm font-semibold text-blue-600 underline decoration-2 sm:mt-0" onClick={() => { setShowSecond(true); setShowFirst(false); setPayload(''); }}>
                  <FormattedMessage id="profile.infocard.button" defaultMessage="Change" />
                </button>
              )}
            </div>

            {showSecond && (
              <div className="mt-2">
                <InputForm type="email" handleSubmit={handleSubmit} payload={payload} setPayload={setPayload} setField={setField} field="email" />
                <button className="inline-flex mt-4 text-sm font-semibold text-red-600 underline decoration-2" onClick={() => { setShowSecond(false); setPayload(''); }}>
                  <FormattedMessage id="profile.infocard.cancel" defaultMessage="Cancel" />
                </button>
              </div>
            )}

            <div className="flex flex-col mb-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-600">
                <FormattedMessage id="profile.infocard.nicknameDescription" defaultMessage="Your nickname is" />
                <span className="ml-1"><strong>{nickname}</strong></span>
              </p>
              {!showFirst && (
                <button className="inline-flex mt-4 text-sm font-semibold text-blue-600 underline decoration-2 sm:mt-0" onClick={() => { setShowFirst(true); setShowSecond(false); setPayload(''); }}>
                  <FormattedMessage id="profile.infocard.button" defaultMessage="Change" />
                </button>
              )}
            </div>

            {showFirst && (
              <div className="mt-2">
                <InputForm type="text" handleSubmit={handleSubmit} payload={payload} setPayload={setPayload} setField={setField} field="nickname" />
                <button className="inline-flex mt-4 text-sm font-semibold text-red-600 underline decoration-2" onClick={() => { setShowFirst(false); setPayload(''); }}>
                  <FormattedMessage id="profile.infocard.cancel" defaultMessage="Cancel" />
                </button>
              </div>
            )}

            {error.length > 0 && <AlertSignal setError={setError} message={error} />}

            <PasswordCard />
            <hr className="mt-4 mb-8" />

            <div className="mb-10">
              <p className="py-2 text-xl font-semibold">Delete Account</p>
              <p className="inline-flex items-center px-4 py-1 rounded-full bg-rose-100 text-rose-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                Proceed with caution
              </p>
              <p className="mt-2">Warning: Once your account is deleted, all associated data will be permanently lost, and you will not be able to recover it under any circumstances.
Continue with deletion</p>
              <button className="ml-auto text-sm font-semibold underline text-rose-600 decoration-2">Delete account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
