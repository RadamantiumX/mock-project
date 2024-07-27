/* eslint-disable @typescript-eslint/no-explicit-any */
import './videoSelected.scss'
import { Eye } from '../icons/Eye';
import { Hearth } from '../icons/Hearth';
import { Share } from '../icons/Share';
import { LikeVideo } from './LikeVideo';
import { Frame } from './Frame';
import { useTruncateTitle,  useFetchFav } from '../../customsHooks/videoHooks';

interface Props {
  id?: string;
  title?: string,
  views?: number,
}

export const VideoSelected: React.FC<Props> = ({ id, title, views }) => {
  const {filled, innerButton, handleFav, commentsCount} = useFetchFav(id)
  const shortTitle = useTruncateTitle(title) // Use the custom Hook to truncate
 
  return (
    <>
      <section style={{ marginTop: "4rem" }} className="lg:mr-10 lg:ml-10 mr-1 ml-1">
        <div className="mt-7 mb-7  h-full relative w-full lg:w-auto mx-auto"> {/* Modificar clase w-full y agregar lg:w-auto y mx-auto */}
          <h2 style={{ fontSize: "1.7rem" }} className="flex-1 text-xl md:text-2xl font-bold text-gray-100 mb-5 truncate-multiline font-title">
            {shortTitle}
            <span style={{ verticalAlign: "middle" }} className="mt-1 shrink-0 ml-3 text-sm sm:text-lg inline-flex items-center gap-2">
              <Eye size={'w-6 h-6 '} />
              <span style={{ verticalAlign: "middle" }}>{views}</span>
            </span>
          </h2>
          <Frame id={id} />{/* Video Embed */}
          <div className='flex flex-row mb-10 mt-4 items-center  lg:mr-1 lg:ml-1 mr-3 ml-3'>
          <a href="#commentsContainer" className="relative bg-gray-700 hover:bg-gray-800 duration-300 py-2 px-4 text-blue-100 rounded flex-shrink-0">
    <i className="fa-regular fa-comment mr-2"></i>
    <span className="md:inline hidden">Comment</span> {/* Ocultar en dispositivos pequeños */}
    {commentsCount.count > 0 && (
        <span className="absolute bg-pink-600 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
            {commentsCount.count}
        </span>
    )}
</a>

            <div className="ml-3"></div>
            <button onClick={handleFav} className="rounded-md flex flex-row p-2 gap-1 font-bold text-white">
              <Hearth filled={filled} />
              <span className="hidden lg:inline">
                {innerButton}
              </span>
            </button>
            <div className="border-l border-gray-300 h-6 mx-2"></div> {/* Divider vertical */}
            <button className="rounded-md flex flex-row p-2 gap-1 font-bold text-white">
              <Share />
              <span className="hidden lg:inline"> {/* Ocultar en dispositivos móviles y tabletas, mostrar en pantallas de escritorio */}
                Share
              </span>
            </button>
            <div className="border-l border-gray-300 h-6 mx-2"></div> {/* Divider vertical */}
            <LikeVideo videoId={id} />
          </div>
        </div>
      </section>
    </>
  )
}
