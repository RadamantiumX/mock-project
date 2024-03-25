import { Like } from "../icons/Like";
import { Response } from "../icons/Response";
interface Props {
   id: number;
   nick_name: string;
   comment: string;   
}

export const CommentArticle: React.FC<Props>=  ({id, nick_name, comment}) => {
  return (
<>
<article className="relative flex antialiased" key={id}>
  <div className="container px-0 mx-auto">
    <div className="flex-col w-full py-4 mx-auto sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm ">
      <div className="flex flex-row flex-wrap">
        <img className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full ml-3" alt="Noob master's avatar" src="https://quarantine.doh.gov.ph/wp-content/uploads/2016/12/no-image-icon-md.png" />
        <div className="flex-col mt-1">
          <div className="flex items-center flex-1 px-4 font-bold leading-tight text-white">{nick_name}
            <span className="ml-2 text-xs font-normal text-gray-500">2 weeks ago</span>
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="px-2 ml-2 text-sm sm:text-lg font-medium leading-loose text-white-300 overflow-wrap break-word block max-w-xl">
                {comment}
              </div>
            </div>
          </div>
          <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column" aria-label="button response">
           <Response/>
          </button>
          <button className="inline-flex items-center px-1 -ml-1 flex-column" aria-label="button like">
            <Like/>
          </button>
        </div>
      </div>
    </div>
  </div>
</article>
    </>
  );
}


