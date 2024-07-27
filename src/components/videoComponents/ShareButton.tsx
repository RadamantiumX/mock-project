import { Share } from "../icons/Share"

export const ShareButton = () => {
  return (
    <>
      <button className="rounded-md flex flex-row p-2 gap-1 font-bold text-white">
              <Share />
              <span className="hidden lg:inline"> {/* Ocultar en dispositivos móviles y tabletas, mostrar en pantallas de escritorio */}
                Share
              </span>
            </button>
    </>
  )
}
