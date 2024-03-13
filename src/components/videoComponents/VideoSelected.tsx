import './videoSelected.scss'

interface Props {
    id: string;
    keywords: string;
    title: string,
    views: number,
}

export const VideoSelected:React.FC<Props> = ({ id, title, views }) => {

  const MAX_TITLE_WORDS = 10; 

  const truncateTitle = (title) => {
    const words = title.split(' ');
    if (words.length > MAX_TITLE_WORDS) {
      return words.slice(0, MAX_TITLE_WORDS).join(' ') + '...';
    }
    return title;
  };

  return (
    <>
<div style={{marginTop:"4rem"}} className="mr-10">
  <section className="mt-7 mb-7 ml-10 h-full relative">
  <h2 style={{fontSize:"1.7rem"}} className="flex-1 text-xl md:text-2xl font-bold text-gray-100 mb-5 truncate-multiline font-title">
  {truncateTitle(title)}
  <span style={{verticalAlign: "middle"}} className="mt-1 shrink-0 ml-3 text-sm sm:text-lg inline-flex items-center gap-2">
    <svg className="w-6 h-6 sm:w-5 sm:h-5 text-gray-500 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{verticalAlign: "middle"}}>
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
    </svg>
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
  </section>
</div>

</>
  )
}
