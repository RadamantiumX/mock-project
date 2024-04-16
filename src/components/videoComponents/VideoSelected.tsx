import './videoSelected.scss'
import { Eye } from '../icons/Eye';
import { Hearth } from '../icons/Hearth';
import { Share } from '../icons/Share';
import { isAuthenticated } from '../../services/api';
import { useStateContext } from '../../contexts/ContextProvider';
interface Props {
    id?: string;
    title?: string,
    views?: number,
}

export const VideoSelected:React.FC<Props> = ({ id, title, views }) => {
  const { token } = useStateContext()

  const MAX_TITLE_WORDS = 10; 

  const handleAuth = () => {
    isAuthenticated(token)
  }

  const truncateTitle = () => {
    const words = title?.split(' ');
    if (words !== undefined) {
    if (words?.length > MAX_TITLE_WORDS || words !== undefined) {
      return words?.slice(0, MAX_TITLE_WORDS).join(' ') + '...';
    }
  }
    return title;
  };
// w-6 h-6 
  return (
    <>
<section style={{marginTop:"4rem"}} className="mr-10">
  <div className="mt-7 mb-7 ml-10 h-full relative">
  <h2 style={{fontSize:"1.7rem"}} className="flex-1 text-xl md:text-2xl font-bold text-gray-100 mb-5 truncate-multiline font-title">
  {truncateTitle()}
  <span style={{verticalAlign: "middle"}} className="mt-1 shrink-0 ml-3 text-sm sm:text-lg inline-flex items-center gap-2">
   <Eye size={'w-6 h-6 '}/>
    <span style={{verticalAlign: "middle"}}>{views}</span>
  </span>
</h2>

    <div className="relative overflow-hidden" style={{ maxWidth: "1150px", width: "100%" }}>
            <div style={{ paddingBottom: "54.25%", position: "relative" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full desktop-height"
                src={`https://eporner.com/embed/${id}`}
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className='flex flex-row gap-2'>
            <button onClick={handleAuth} className="border rounded-md flex flex-row p-2 gap-1"><Hearth/>Add favorites</button>
            <button className="border rounded-md flex flex-row p-2 gap-1"><Share/>Share video</button>
          </div>
  </div>
</section>

</>
  )
}
